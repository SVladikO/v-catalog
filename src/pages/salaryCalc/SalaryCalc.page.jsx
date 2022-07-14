import React, {useState} from "react";

import {ReactComponent as GithubIcon} from "../../image/footer/github.svg";
import {ReactComponent as NPMIcon} from "../../image/footer/npm.svg";
import {Wrapper, InputStyle, Row, Table, RowDescription} from './SalaryCalc.style';

function Input({changeHandler, value, name}) {
  function convertToNumber(str) {
    const num = +str.split('\'').join('');

    return num;
  }

  function addSeparator(num) {
    const str = new String(num);

    if (str.length <=3) {
      return str;
    }

    const arr = str.split('');
    let index = arr.length - 3;

    while (index > 0) {
      arr.splice(index, 0, '\'')
      index= index - 3;
    }

    const result = arr.join('');

    return result;

  }

  addSeparator(1234);

  return (
    <InputStyle
      name={name}
      value={addSeparator(value)}
      onChange={e => changeHandler(convertToNumber(e.target.value))}/>
  )
}

function CurrencyTimeCalculator() {
  const [courseUAH, setCourseUAH] = useState(35);
  const [monthIncome, setMonthIncome] = useState(5000);
  const [workDayPerMonth, setWorkDayPerMonth] = useState(21);
  const [workHoursPerDay, setWorkHoursPerDay] = useState(8);
  const [years, setYears] = useState(3);

  function convertHourIncomeToMonth(value) {
    setMonthIncome(value * workDayPerMonth * workHoursPerDay)
  }

  function convertDayIncomeToMonth(value) {
    setMonthIncome(value * workDayPerMonth)
  }
  function convertYearIncomeToMonth(value) {
    setMonthIncome(value / 12 )
  }
  function convertYearsIncomeToMonth(value) {
    setMonthIncome(monthIncome / years / 12)
  }



  return (
<>
    <Table>

      <RowDescription></RowDescription>
      <span>$</span>
      <span>UAH</span>

      <RowDescription>Currency exchange:</RowDescription>
      <span></span>
      <Input type='number' value={courseUAH} onChange={e => setCourseUAH(e.target.value)}/>

      <RowDescription>Per hour:</RowDescription>
      <Input name='usd_income_per_hour'  onChange={e => convertHourIncomeToMonth(e.target.value)} value={monthIncome/workDayPerMonth/workHoursPerDay} />
      <Input name='uah_income_per_hour'  onChange={e => convertHourIncomeToMonth(e.target.value/courseUAH)} value={monthIncome/workDayPerMonth/workHoursPerDay*courseUAH} />

      <RowDescription>Per day:</RowDescription>
      <Input name='usd_income_per_day' onChange={e => convertDayIncomeToMonth(e.target.value)}  value={monthIncome/workDayPerMonth} />
      <Input name='uah_income_per_day' onChange={e => convertDayIncomeToMonth(e.target.value/courseUAH)}  value={monthIncome/workDayPerMonth*courseUAH} />

      <RowDescription>Per month:</RowDescription>
      <Input name='usd_income_per_month' onChange={e => setMonthIncome(e.target.value)}           value={monthIncome} />
      <Input name='uah_income_per_month' onChange={e => setMonthIncome(e.target.value/courseUAH)}           value={monthIncome*courseUAH} />

      <RowDescription>By year:</RowDescription>
      <Input name='usd_income_per_year'  onChange={e => convertYearIncomeToMonth(e.target.value)} value={monthIncome*12} />
      <Input name='uah_income_per_year'  onChange={e => convertYearIncomeToMonth(e.target.value/courseUAH)} value={monthIncome*12*courseUAH} />

      <RowDescription>By <Input type="number" value={years} width={30}  onChange={e => setYears(e.target.value)}/> year:</RowDescription>
      <Input name='usd_income_by_years'  onChange={e => convertYearsIncomeToMonth(e.target.value)} value={monthIncome*12*years} />
      <Input name='uah_income_by_years'  onChange={e => convertYearsIncomeToMonth(e.target.value/courseUAH)} value={monthIncome*12*years*courseUAH} />
    </Table>

  By <Input type="number" value={workDayPerMonth} width={30} onChange={e => setWorkDayPerMonth(e.target.value)}/> work days

</>
    // <Wrapper>
    //   <Row>Income in $</Row>
    //   <Row>By <Input type="number" value={workDayPerMonth} width={30} onChange={e => setWorkDayPerMonth(e.target.value)}/> work days</Row>
    //   <Row>$ $</Row>
    //   <Row>Per hour: <Input name='usd_income_per_hour'  onChange={e => convertHourIncomeToMonth(e.target.value)} value={monthIncome/workDayPerMonth/workHoursPerDay} /></Row>
    //   <Row>Per day:  <Input name='usd_income_per_day' onChange={e => convertDayIncomeToMonth(e.target.value)}  value={monthIncome/workDayPerMonth} /></Row>
    //   <Row>Per month:<Input name='usd_income_per_month' onChange={e => setMonthIncome(e.target.value)}           value={monthIncome} /></Row>
    //   <Row>By year:  <Input name='usd_income_per_year'  onChange={e => convertYearIncomeToMonth(e.target.value)} value={monthIncome*12} /></Row>
    //   <pre>By <Input type="number" value={years} width={30}  onChange={e => setYears(e.target.value)}/> year:
    //                  <Input name='usd_income_by_years'  onChange={e => convertYearsIncomeToMonth(e.target.value)} value={monthIncome*12*years} />
    //   </pre>
    // </Wrapper>
  )
}


function SalaryCalcPage() {
  return (
    <>
      <CurrencyTimeCalculator/>
      {/*<CurrencyTimeCalculator/>*/}
    </>
  )
}
;

export default SalaryCalcPage;
