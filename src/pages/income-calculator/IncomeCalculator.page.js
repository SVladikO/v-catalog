import React, {useState} from "react";
import {
    Wrapper, InputStyle, Title, ToCenter, Table, NumberButtonWrapper, NumberButton,
    RowDescription, BottomMenu, OvertimeHours, OvertimePrice, OvertimeWrapper,
    EmptyMenuRow, CheckboxMenuWrapper, Label
} from './IncomeCalculator.style';

import NumberInput from './components/NumberInput.component.js'

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

  const CURRENCY_MENU = [
  {
    checked: showUSD,
    changeHandler: setShowUSD,
    label: 'USD',
    id: 'usdCurrency'
  },
  {
    checked: showCustomCurrency,
    changeHandler: setShowCustomCurrency,
    label: customCurrencyName,
    id: 'customCurrency'
  }
];

  const renderOvertimePrice = () => {
    if (workHoursPerDay <= 8) {
      return <OvertimeWrapper />;
    }
    const incomePerHour = monthIncome / workDayPerMonth / workHoursPerDay;
    const extraHours = (workHoursPerDay-8)*workDayPerMonth;
    const overtimePriceUSD = incomePerHour * extraHours;
    const overtimePriceCustomCurrency = overtimePriceUSD * customCourse;

    return <OvertimeWrapper>
      <OvertimeHours>+{extraHours}h</OvertimeHours> =
      <OvertimePrice> {addSeparator(overtimePriceUSD)}  $ </OvertimePrice>
      (<OvertimePrice>{addSeparator(overtimePriceCustomCurrency)} {customCurrencyName}</OvertimePrice>)
    </OvertimeWrapper>
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
                    <NumberInput value={customCourse} changeHandler={setCustomCourse}>
                        <InputStyle width='60px' value={customCurrencyName} onChange={e => setCustomCurrencyName(e.target.value)}/>
                        {
                           showUSD && showCustomCurrency
                             ? <span> = 1 USD</span>
                             : null
                         }
                   </NumberInput>
                   </>
                : <EmptyMenuRow />
           }
        </div>
    )
  }

  const renderCheckboxMenu = (checkboxes) => {
    return (
           <CheckboxMenuWrapper>
               {checkboxes.map(i => (
                  <>
                    <InputStyle width='28px' type='checkbox' checked={i.checked} onChange={e => i.changeHandler(e.target.checked)} id={i.id} key={i.id} />
                    <Label for={i.id} key={i.id+'label'}>{i.label}</Label>
                  </>
               ))}
           </CheckboxMenuWrapper>
    )
  }

  const renderTimeMenu = () => {
    return (
           <CheckboxMenuWrapper>
              <InputStyle width='28px' type='checkbox' checked={showUSD} onChange={e => setShowUSD(e.target.checked)}/>
              <Label>$</Label>
              <InputStyle width='28px' type='checkbox' checked={showCustomCurrency} onChange={e => setShowCustomCurrency(e.target.checked)}/>
              <Label>{customCurrencyName}</Label>
           </CheckboxMenuWrapper>
    )
  }

  const HeaderRow = (
      <>
        <ToCenter>{showUSD ? 'USD' : ''}</ToCenter>
        <ToCenter>{showCustomCurrency ? customCurrencyName : ''}</ToCenter>
        <span>In 1</span>
      </>
  );

  const HourRow = (
      <>
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
        <RowDescription>hour</RowDescription>
      </>
  );

  const DayRow = (
      <>
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
       <RowDescription>day</RowDescription>
      </>
  );

  const MonthRow = (
      <>
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
        <RowDescription>month</RowDescription>
      </>
  );

  const YearRow = (
      <>
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
        <RowDescription>year</RowDescription>
      </>
  );



  return (
    <>
      <Table>
        {HeaderRow}
        {HourRow}
        {DayRow}
        {MonthRow}
        {YearRow}
      </Table>
      <BottomMenu>
          {workHoursPerDay*workDayPerMonth} hours/month
          {renderOvertimePrice()}
          <NumberInput value={workHoursPerDay} changeHandler={setWorkHoursPerDay}>hours/day</NumberInput>
          <NumberInput value={workDayPerMonth} changeHandler={setWorkDayPerMonth}>days/month</NumberInput>
         {renderCurrencyCourse()}
         {renderCheckboxMenu(CURRENCY_MENU)}
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
    </Wrapper>
  )
}

export default IncomeCalculatorPage;
