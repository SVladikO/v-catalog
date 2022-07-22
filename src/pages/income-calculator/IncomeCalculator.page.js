import React, {useState} from "react";

import THEME from "../../theme";

import {
    Wrapper, InputStyle, Title, ToCenter, Table, NumberButtonWrapper, NumberButton,
    RowDescription, BottomMenu, OvertimeHours, OvertimePrice, OvertimeWrapper,
    EmptyMenuRow, CheckboxMenuWrapper, Label, EmptyTD
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

const USD_NAME = '$';

function CurrencyTimeCalculator() {
  const [monthIncome, setMonthIncome] = useState(1000);
  const [workDays, setWorkDays] = useState(21);
  const [workHours, setWorkHours] = useState(8);
  const [workYears, setWorkYears] = useState(1);
  
  const [customCourse, setCustomCourse] = useState(37);
  const [customCurrencyName, setCustomCurrencyName] = useState('UAH');
  
  const [isVisibleHour, setIsVisibleHour] = useState(true);
  const [isVisibleDay, setIsVisibleDay] = useState(true);
  const [isVisibleMonth, setIsVisibleMonth] = useState(true);
  const [isVisibleYear, setIsVisibleYear] = useState(true);

  const [isVisibleUSD, setIsVisibleUSD] = useState(true);
  const [isVisibleCustomCurrency, setIsVisibleCustomCurrency] = useState(true);

  const convertHourIncomeToMonth = value => setMonthIncome(value * workDays * workHours);
  const convertDayIncomeToMonth = value => setMonthIncome(value * workDays);
  const convertYearIncomeToMonth = value => setMonthIncome(value / workYears / 12);

  const CURRENCY_MENU = [
  {
    checked: isVisibleUSD,
    changeHandler: setIsVisibleUSD,
    label: USD_NAME,
    id: 'usdCurrency'
  },
  {
    checked: isVisibleCustomCurrency,
    changeHandler: setIsVisibleCustomCurrency,
    label: customCurrencyName,
    id: 'customCurrency'
  }
];

  const TIME_MENU = [
  {
    checked: isVisibleHour,
    changeHandler: setIsVisibleHour,
    label: 'H',
    id: '_hour'
  },
  {
    checked: isVisibleDay,
    changeHandler: setIsVisibleDay,
    label: 'D',
    id: '_day'
  },
  {
    checked: isVisibleMonth,
    changeHandler: setIsVisibleMonth,
    label: 'M',
    id: '_month'
  },
  {
    checked: isVisibleYear,
    changeHandler: setIsVisibleYear,
    label: 'Y',
    id: '_year'
  }
];

  const renderOvertimePrice = () => {
    if (workHours <= 8) {
      return <OvertimeWrapper />;
    }
    const incomePerHour = monthIncome / workDays / workHours;
    const extraHours = (workHours-8)*workDays;
    const overtimePriceUSD = incomePerHour * extraHours;
    const overtimePriceCustomCurrency = overtimePriceUSD * customCourse;

    return <OvertimeWrapper>
      <OvertimeHours>+{extraHours}h</OvertimeHours> =
      <OvertimePrice> {addSeparator(overtimePriceUSD)}{USD_NAME} </OvertimePrice>
      (<OvertimePrice>{addSeparator(overtimePriceCustomCurrency)} {customCurrencyName}</OvertimePrice>)
    </OvertimeWrapper>
  }

  const renderIncreasedSalary = () => {
      if (workHours >= 8) {
        return;
      }

      const incomePerHourUSD = monthIncome / workDays / workHours;
      const incomePerMonthUSD = incomePerHourUSD * 8 * workDays;
      const incomePerMonthCustomCurrency = incomePerMonthUSD * customCourse;

      return <pre>{addSeparator(incomePerMonthUSD)}{USD_NAME} or {addSeparator(incomePerMonthCustomCurrency)} {customCurrencyName} = YOUR HIGHER SALARY</pre>
    }

  const renderCurrencyCourseMenu = () => {
    return (
        <div>
           {isVisibleCustomCurrency
                ? <>
                    <NumberInput value={customCourse} changeHandler={setCustomCourse}>
                        <InputStyle width='70px' value={customCurrencyName} onChange={e => setCustomCurrencyName(e.target.value)} color={THEME.COLOR.INVERT_0}/>
                        {
                           isVisibleUSD && isVisibleCustomCurrency
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
                    <Label for={i.id} key={i.id+'label'} color={THEME.COLOR.INVERT_0}>{i.label}</Label>
                  </>
               ))}
           </CheckboxMenuWrapper>
    )
  }

  const EmptyRow = (
    <>
      <EmptyTD></EmptyTD>
      <EmptyTD></EmptyTD>
      <EmptyTD></EmptyTD>
    </>
  );

  const HeaderRow = (
      <>
        <ToCenter>{isVisibleUSD ? USD_NAME : ''}</ToCenter>
        <ToCenter>{isVisibleCustomCurrency ? customCurrencyName : ''}</ToCenter>
        <span>In 1</span>
      </>
  );

  const HourRow = isVisibleHour
  ?  (
      <>
        <Input
          isShow={isVisibleUSD}
          name='usd_income_per_hour'
          changeHandler={value => convertHourIncomeToMonth(value)}
          value={monthIncome / workDays / workHours}
        />
        <Input
          isShow={isVisibleCustomCurrency}
          name='uah_income_per_hour'
          value={monthIncome / workDays / workHours * customCourse}
          changeHandler={value => convertHourIncomeToMonth(value / customCourse)}
        />
        <RowDescription>hour</RowDescription>
      </>
  )
  : EmptyRow;

  const DayRow = isVisibleDay
  ? (
      <>
        <Input
         isShow={isVisibleUSD}
         name='usd_income_per_workDays'
         changeHandler={value => convertDayIncomeToMonth(value)}
         value={monthIncome / workDays}
       />
       <Input
         isShow={isVisibleCustomCurrency}
         name='uah_income_per_workDays'
         changeHandler={value => convertDayIncomeToMonth(value / customCourse)}
         value={monthIncome / workDays * customCourse}
       />
       <RowDescription>days</RowDescription>
      </>
  )
  : EmptyRow;

  const MonthRow = isVisibleMonth
   ? (
      <>
        <Input
          isShow={isVisibleUSD}
          name='usd_income_per_month'
          changeHandler={value => setMonthIncome(value)}
          value={monthIncome}
        />
        <Input
          isShow={isVisibleCustomCurrency}
          name='uah_income_per_month'
          changeHandler={value => setMonthIncome(value / customCourse)}
          value={monthIncome * customCourse}
        />
        <RowDescription>month</RowDescription>
      </>
  )
  : EmptyRow;

  const YearRow = isVisibleYear
  ? (
      <>
        <Input
          isShow={isVisibleUSD}
          name='usd_income_by_years'
          changeHandler={value => convertYearIncomeToMonth(value)}
          value={monthIncome * 12 * workYears}
        />
        <Input
          isShow={isVisibleCustomCurrency}
          name='uah_income_by_years'
          changeHandler={value => convertYearIncomeToMonth(value / customCourse)}
          value={monthIncome * 12 * workYears * customCourse}
        />
        <RowDescription>year</RowDescription>
      </>
  )
  : EmptyRow;



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
          {workHours*workDays} hours/month
          {renderOvertimePrice()}
          <NumberInput value={workHours} changeHandler={setWorkHours}>hours/day</NumberInput>
          <NumberInput value={workDays} changeHandler={setWorkDays}>days/month</NumberInput>
         {renderCurrencyCourseMenu()}
         {renderCheckboxMenu(CURRENCY_MENU)}
         {renderCheckboxMenu(TIME_MENU)}
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
