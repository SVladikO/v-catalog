import useLocalStorage from '../../hooks/useLocalStorage.js'


import THEME from "../../theme";
import {
    Wrapper, InputStyle, Title, ToCenter, Table, RowDescription, BottomMenu,
     OvertimeHours, OvertimePrice, OvertimeTitle, OvertimeWrapper
} from './IncomeCalculator.style';

import Popup from "../../components/popup";

import NumberInput from './components/NumberInput.component.js'
import Introduction from "../../components/Introduction/Introduction.component";

function Input({changeHandler, value, name}) {
  const convertToNumber = str => +str.split('\'').join('');


  return (
    <InputStyle
      name={name}
      value={addSeparator(value)}
      onChange={e => changeHandler(convertToNumber(e.target.value))}/>
  )
}

const USD_NAME = '$';

function CurrencyTimeCalculator() {
  const [monthIncome, setMonthIncome] = useLocalStorage('salary', 1000);
  const [workDays, setWorkDays] = useLocalStorage('workDays', 21);
  const [workHours, setWorkHours] = useLocalStorage('workHours', 8);
  const [workYears] = useLocalStorage('workYears', 1);
  
  const [customCourse, setCustomCourse] = useLocalStorage('customCourse', 40);
  const [customCurrencyName, setCustomCurrencyName] = useLocalStorage('customCurrencyName', 'UAH');

  const convertHourIncomeToMonth = value => setMonthIncome(value * workDays * workHours);
  const convertDayIncomeToMonth = value => setMonthIncome(value * workDays);
  const convertYearIncomeToMonth = value => setMonthIncome(value / workYears / 12);

  const [isOpenPopup, setIsOpenPopup] = useLocalStorage(' isOpenIntroIncomeCalcPopup', true);

  const closePopup = () => setIsOpenPopup(!isOpenPopup);

  const renderOvertimePrice = () => {
    const incomePerHour = monthIncome / workDays / workHours;
    const extraHours = (workHours-8)*workDays;
    const overtimePriceUSD = incomePerHour * extraHours;
    const overtimePriceCustomCurrency = overtimePriceUSD * customCourse;

    return <OvertimeWrapper>
      <OvertimeTitle>Overtime</OvertimeTitle>
      <OvertimeHours>+{extraHours} h/month</OvertimeHours> =
      <OvertimePrice>+{addSeparator(overtimePriceUSD)}{USD_NAME} </OvertimePrice>
      (<OvertimePrice>{addSeparator(overtimePriceCustomCurrency)} {customCurrencyName}</OvertimePrice>)
    </OvertimeWrapper>
  }

  const renderIncreasedSalary = () => {
      const incomePerHourUSD = monthIncome / workDays / workHours;
      const incomePerMonthUSD = incomePerHourUSD * 8 * workDays;
      const incomePerMonthCustomCurrency = incomePerMonthUSD * customCourse;

      return <OvertimeWrapper>
                <OvertimeTitle> Increased salary </OvertimeTitle>
               {addSeparator(incomePerMonthUSD)}{USD_NAME}
               or
               {addSeparator(incomePerMonthCustomCurrency)} {customCurrencyName}
               </OvertimeWrapper>
    }

  const renderCurrencyCourseMenu = () => {
    return (
        <div>
           <>
             <NumberInput value={customCourse} changeHandler={setCustomCourse}>
               <InputStyle width='70px' value={customCurrencyName} onChange={e => setCustomCurrencyName(e.target.value)} color={THEME.COLOR.INVERT_0}/>
               <span> = 1 USD</span>
               </NumberInput>
            </>
        </div>
    )
  }

  const HeaderRow = (
      <>
        <ToCenter>{USD_NAME}</ToCenter>
        <ToCenter>{customCurrencyName}</ToCenter>
        <span>In 1</span>
      </>
  );

  const HourRow = (
      <>
        <Input
          name='usd_income_per_hour'
          changeHandler={value => convertHourIncomeToMonth(value)}
          value={monthIncome / workDays / workHours}
        />
        <Input
          name='uah_income_per_hour'
          value={monthIncome / workDays / workHours * customCourse}
          changeHandler={value => convertHourIncomeToMonth(value / customCourse)}
        />
        <RowDescription>hour</RowDescription>
      </>
  );

  const DayRow = (
      <>
        <Input
         name='usd_income_per_workDays'
         changeHandler={value => convertDayIncomeToMonth(value)}
         value={monthIncome / workDays}
       />
       <Input
         name='uah_income_per_workDays'
         changeHandler={value => convertDayIncomeToMonth(value / customCourse)}
         value={monthIncome / workDays * customCourse}
       />
       <RowDescription>days</RowDescription>
      </>
  );

  const MonthRow = (
      <>
        <Input
          name='usd_income_per_month'
          changeHandler={value => setMonthIncome(value)}
          value={monthIncome}
        />
        <Input
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
          name='usd_income_by_years'
          changeHandler={value => convertYearIncomeToMonth(value)}
          value={monthIncome * 12 * workYears}
        />
        <Input
          name='uah_income_by_years'
          changeHandler={value => convertYearIncomeToMonth(value / customCourse)}
          value={monthIncome * 12 * workYears * customCourse}
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
          {workHours*workDays} hours/month
          { (workHours === 8)
                ? <OvertimeWrapper />
                : (workHours >= 8)
                    ? renderOvertimePrice()
                    : <OvertimeWrapper />
          }
          <NumberInput value={workHours} changeHandler={setWorkHours}>hours/day</NumberInput>
          <NumberInput value={workDays} changeHandler={setWorkDays}>days/month</NumberInput>
         {renderCurrencyCourseMenu()}
      </BottomMenu>
      {
        isOpenPopup
        ? <Popup closePopup={closePopup}
            title={"Вивчи Англійський алфавіт"}
            subTitle={"Чи зможеш продиктувати своє імя і прізвище Англійською ?"}
            description={"Перевірити себе"}
          >
            <Introduction
              title='Time calculator'
              description={
                [
                    "Hi there.)",
                    "- How much does your time cost ?",
                    "- What's your one hour price ?",
                    "You can find all answers right now.",
                ]
              }
              buttonTitle="Let's calculate ?)"
              handleClick={closePopup}
            />
          </Popup>
        : null
      }
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
      <Title>Time Calculator</Title>
      <CurrencyTimeCalculator/>
    </Wrapper>
  )
}

export default IncomeCalculatorPage;
