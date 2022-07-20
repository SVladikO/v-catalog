import React, {useState} from "react";
import {searchParams} from '../../common/location.js';
import {QUERY_PARAMS} from '../../common/route.js';

import { Wrapper, InputStyle, Title, ToCenter, Table, RowDescription, BottomMenu } from './IncomeCalculator.style';

const params = searchParams();
const isShowSecretPart = params.has(QUERY_PARAMS.SHOW_SECRET);

function Input({changeHandler, value, name, isShow}) {
  const convertToNumber = str => +str.split('\'').join('');

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
  const [customCourse, setCustomCourse] = useState(37);
  const [monthIncome, setMonthIncome] = useState(5000);
  const [workDayPerMonth, setWorkDayPerMonth] = useState(21);
  const [workHoursPerDay, setWorkHoursPerDay] = useState(8);
  const [years, setYears] = useState(1);
  const [customCurrencyName, setCustomCurrencyName] = useState('UAH');
  const [showUSD, setShowUSD] = useState(true);
  const [showCustomCurrency, setShowCustomCurrency] = useState(true);

  const convertHourIncomeToMonth = value => setMonthIncome(value * workDayPerMonth * workHoursPerDay);
  const convertDayIncomeToMonth = value => setMonthIncome(value * workDayPerMonth);
  const convertYearsIncomeToMonth = value => setMonthIncome(value / years / 12);

  const renderOvertimePrice = () => {
    if (workHoursPerDay <= 8) {
      return;
    }

    const incomePerHour = monthIncome / workDayPerMonth / workHoursPerDay;
    const amountExtraHoursPerMonth = (workHoursPerDay-8)*workDayPerMonth;
    const overtimePriceUSD = incomePerHour * amountExtraHoursPerMonth;
    const overtimePriceCustomCurrency = overtimePriceUSD * customCourse;

    return <pre>{addSeparator(overtimePriceUSD)}$ or {addSeparator(overtimePriceCustomCurrency)} {customCurrencyName} = OVERTIME PRICE {workHoursPerDay}h {workDayPerMonth}mos</pre>
  }

  const renderIncreasedSalary = () => {
      if (workHoursPerDay >= 8) {
        return;
      }

      const incomePerHourUSD = monthIncome / workDayPerMonth / workHoursPerDay;
      const incomePerMonthUSD = incomePerHourUSD * 8 * workDayPerMonth;
      const incomePerMonthCustomCurrency = incomePerMonthUSD * customCourse;

      return <pre>{addSeparator(incomePerMonthUSD)}$ or {addSeparator(incomePerMonthCustomCurrency)} {customCurrencyName} = YOUR HIGHER SALARY</pre>
    }

  const renderCurrencyCourse = () => {
    return (
        <div>
           {showCustomCurrency
                ? <>
                    <InputStyle width={60} value={customCourse} onChange={e => setCustomCourse(e.target.value)} />
                    <InputStyle width={60} value={customCurrencyName} onChange={e => setCustomCurrencyName(e.target.value)}/>
                   </>
                : <span></span>
           }
           {showUSD && showCustomCurrency
             ? <span> = 1 $</span>
             : <span></span>
           }
        </div>
    )
  }

  const renderShowHideMenu = () => {
    return (
           <pre>
              <InputStyle width='auto' type='checkbox' checked={showUSD} onChange={e => setShowUSD(e.target.checked)}/> ${"   "}
              <InputStyle width='auto' type='checkbox' checked={showCustomCurrency} onChange={e => setShowCustomCurrency(e.target.checked)}/> {customCurrencyName}
           </pre>
    )
  }

  return (
    <>

      <Table>
        <ToCenter>{showUSD ? '$' : ''}</ToCenter>
        <ToCenter>{showCustomCurrency ? customCurrencyName : ''}</ToCenter>
        <span></span>


        <Input
          isShow={showUSD}
          name='usd_income_per_hour'
          changeHandler={value => convertHourIncomeToMonth(value)}
          value={monthIncome / workDayPerMonth / workHoursPerDay}
        />
        <Input
          isShow={showCustomCurrency}
          name='uah_income_per_hour'
          value={monthIncome / workDayPerMonth / workHoursPerDay * customCourse}
          changeHandler={value => convertHourIncomeToMonth(value / customCourse)}
        />
        <RowDescription>1h</RowDescription>

        <Input
          isShow={showUSD}
          name='usd_income_per_day'
          changeHandler={value => convertDayIncomeToMonth(value)}
          value={monthIncome / workDayPerMonth}
        />
        <Input
          isShow={showCustomCurrency}
          name='uah_income_per_day'
          changeHandler={value => convertDayIncomeToMonth(value / customCourse)}
          value={monthIncome / workDayPerMonth * customCourse}
        />
        <RowDescription>1d</RowDescription>

        <Input
          isShow={showUSD}
          name='usd_income_per_month'
          changeHandler={value => setMonthIncome(value)}
          value={monthIncome}
        />
        <Input
          isShow={showCustomCurrency}
          name='uah_income_per_month'
          changeHandler={value => setMonthIncome(value / customCourse)}
          value={monthIncome * customCourse}
        />
        <RowDescription>1mos</RowDescription>

        <Input
          isShow={showUSD}
          name='usd_income_by_years'
          changeHandler={value => convertYearsIncomeToMonth(value)}
          value={monthIncome * 12 * years}
        />
        <Input
          isShow={showCustomCurrency}
          name='uah_income_by_years'
          changeHandler={value => convertYearsIncomeToMonth(value / customCourse)}
          value={monthIncome * 12 * years * customCourse}
        />
        <RowDescription>
          <InputStyle value={years} width={40} onChange={e => setYears(e.target.value)}/> y
        </RowDescription>
      </Table>
      <BottomMenu>
          <InputStyle value={workHoursPerDay} width={60} onChange={e => setWorkHoursPerDay(e.target.value)}/> work hours per day
          <br />
          <InputStyle value={workDayPerMonth} width={60} onChange={e => setWorkDayPerMonth(e.target.value)}/> work days per month
          <br />
          <pre>{workHoursPerDay*workDayPerMonth} {"  "} work hours per months</pre>


          {isShowSecretPart && 'Secret part:'} <br />
          {isShowSecretPart && renderOvertimePrice()}
          <br />
         {renderCurrencyCourse()}
         {renderShowHideMenu()}
      </BottomMenu>
    </>
  )
}

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

function IncomeCalculatorPage() {
  return (
    <Wrapper>
      <Title>Income Calculator</Title>
      <CurrencyTimeCalculator/>
      {/*<CurrencyTimeCalculator/>*/}
    </Wrapper>
  )
}

export default IncomeCalculatorPage;
