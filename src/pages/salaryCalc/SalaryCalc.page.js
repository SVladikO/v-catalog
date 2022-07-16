import React, {useState} from "react";

import {Wrapper, InputStyle, Title, CustomCurrencyWrapper, ContentToCenter, Table, RowDescription, BottomMenu} from './SalaryCalc.style';

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
  const [customCurrencyName, setCustomCurrencyName] = useState('UAH');
  const [showUSD, setShowUSD] = useState(true);
  const [showCustomCurrency, setShowCustomCurrency] = useState(true);

  const convertHourIncomeToMonth = value => setMonthIncome(value * workDayPerMonth * workHoursPerDay);
  const convertDayIncomeToMonth = value => setMonthIncome(value * workDayPerMonth);
  const convertYearsIncomeToMonth = value => setMonthIncome(value / years / 12);

  const renderCurrencyCourse = () => {
    return (
        <div>
           {showCustomCurrency
                ? <>
                    <InputStyle width={30} value={courseUAH} onChange={e => setCourseUAH(e.target.value)} type='number'/>
                    <InputStyle width={58} value={customCurrencyName} onChange={e => setCustomCurrencyName(e.target.value)}/>
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
        <ContentToCenter>{showUSD ? '$' : ''}</ContentToCenter>
        <ContentToCenter>{showCustomCurrency ? customCurrencyName : ''}</ContentToCenter>
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
          value={monthIncome / workDayPerMonth / workHoursPerDay * courseUAH}
          changeHandler={value => convertHourIncomeToMonth(value / courseUAH)}
        />
        <RowDescription>1 hour:</RowDescription>

        <Input
          isShow={showUSD}
          name='usd_income_per_day'
          changeHandler={value => convertDayIncomeToMonth(value)}
          value={monthIncome / workDayPerMonth}
        />
        <Input
          isShow={showCustomCurrency}
          name='uah_income_per_day'
          changeHandler={value => convertDayIncomeToMonth(value / courseUAH)}
          value={monthIncome / workDayPerMonth * courseUAH}
        />
        <RowDescription>1 day:</RowDescription>

        <Input
          isShow={showUSD}
          name='usd_income_per_month'
          changeHandler={value => setMonthIncome(value)}
          value={monthIncome}
        />
        <Input
          isShow={showCustomCurrency}
          name='uah_income_per_month'
          changeHandler={value => setMonthIncome(value / courseUAH)}
          value={monthIncome * courseUAH}
        />
        <RowDescription>1 month:</RowDescription>

        <Input
          isShow={showUSD}
          name='usd_income_by_years'
          changeHandler={value => convertYearsIncomeToMonth(value)}
          value={monthIncome * 12 * years}
        />
        <Input
          isShow={showCustomCurrency}
          name='uah_income_by_years'
          changeHandler={value => convertYearsIncomeToMonth(value / courseUAH)}
          value={monthIncome * 12 * years * courseUAH}
        />
        <RowDescription>
          <InputStyle type="number" value={years} width={30} onChange={e => setYears(e.target.value)}/> year
        </RowDescription>
      </Table>
      <BottomMenu>
         {renderShowHideMenu()}
          <InputStyle type="number" value={workDayPerMonth} width={30} onChange={e => setWorkDayPerMonth(e.target.value)}/> work days
         {renderCurrencyCourse()}
      </BottomMenu>
    </>
  )
}


function SalaryCalcPage() {
  return (
    <Wrapper>
      <Title>Income Calculator</Title>
      <CurrencyTimeCalculator/>
      {/*<CurrencyTimeCalculator/>*/}
    </Wrapper>
  )
}

export default SalaryCalcPage;