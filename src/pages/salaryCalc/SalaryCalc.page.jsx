import React, {useState} from "react";

import {Wrapper, InputStyle, Title, Table, RowDescription, BottomMenu} from './SalaryCalc.style';

function Input({changeHandler, value, name, isShow}) {
  const convertToNumber = str => +str.split('\'').join('');

  function addSeparator(num) {
    const str = new String(num.toFixed(0));

    if (str.length <= 3) {
      return str;
    }

    const arr = str.split('');
    let index = arr.length - 3;

    while (index > 0) {
      arr.splice(index, 0, '\'')
      index = index - 3;
    }

    const result = arr.join('');

    return result;

  }

  if (!isShow) {
    return <div></div>;
  }

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
  const [years, setYears] = useState(1);
  const [showUSD, setShowUSD] = useState(true);
  const [showUAH, setShowUAH] = useState(true);

  const convertHourIncomeToMonth = value => setMonthIncome(value * workDayPerMonth * workHoursPerDay);
  const convertDayIncomeToMonth = value => setMonthIncome(value * workDayPerMonth);
  const convertYearsIncomeToMonth = value => setMonthIncome(value / years / 12);

  return (
    <>

      <Table>

        <RowDescription>Currency</RowDescription>
        {showUSD ? <span>$ 1</span> : <span></span>}
        {showUAH
          ? <span> ? <InputStyle width={30} type='number' value={courseUAH} onChange={e => setCourseUAH(e.target.value)}/></span>
          : <span></span>
        }

        <RowDescription>1 hour:</RowDescription>
        <Input
          isShow={showUSD}
          name='usd_income_per_hour'
          changeHandler={value => convertHourIncomeToMonth(value)}
          value={monthIncome / workDayPerMonth / workHoursPerDay}
        />
        <Input
          isShow={showUAH}
          name='uah_income_per_hour'
          value={monthIncome / workDayPerMonth / workHoursPerDay * courseUAH}
          changeHandler={value => convertHourIncomeToMonth(value / courseUAH)}
        />

        <RowDescription>1 day:</RowDescription>
        <Input
          isShow={showUSD}
          name='usd_income_per_day'
          changeHandler={value => convertDayIncomeToMonth(value)}
          value={monthIncome / workDayPerMonth}
        />
        <Input
          isShow={showUAH}
          name='uah_income_per_day'
          changeHandler={value => convertDayIncomeToMonth(value / courseUAH)}
          value={monthIncome / workDayPerMonth * courseUAH}
        />

        <RowDescription>1 month:</RowDescription>
        <Input
          isShow={showUSD}
          name='usd_income_per_month'
          changeHandler={value => setMonthIncome(value)}
          value={monthIncome}
        />
        <Input
          isShow={showUAH}
          name='uah_income_per_month'
          changeHandler={value => setMonthIncome(value / courseUAH)}
          value={monthIncome * courseUAH}
        />

        <RowDescription>
          <InputStyle type="number" value={years} width={30} onChange={e => setYears(e.target.value)}/> year:
        </RowDescription>
        <Input
          isShow={showUSD}
          name='usd_income_by_years'
          changeHandler={value => convertYearsIncomeToMonth(value)}
          value={monthIncome * 12 * years}
        />
        <Input
          isShow={showUAH}
          name='uah_income_by_years'
          changeHandler={value => convertYearsIncomeToMonth(value / courseUAH)}
          value={monthIncome * 12 * years * courseUAH}
        />
      </Table>
      <BottomMenu>
        <InputStyle
          type="number" value={workDayPerMonth} width={30} onChange={e => setWorkDayPerMonth(e.target.value)}/> work
        days

        <RowDescription>
          <pre>
          Show:
            {" "}
            <InputStyle width='auto' type='checkbox' checked={showUSD} onChange={e => setShowUSD(e.target.checked)}/> USD
            {"   "}
            <InputStyle width='auto' type='checkbox' checked={showUAH} onChange={e => setShowUAH(e.target.checked)}/> UAH
          </pre>

        </RowDescription>
      </BottomMenu>


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
    <Wrapper>
      <Title>Salary Calculator</Title>
      <CurrencyTimeCalculator/>
      {/*<CurrencyTimeCalculator/>*/}
    </Wrapper>
  )
}

export default SalaryCalcPage;
