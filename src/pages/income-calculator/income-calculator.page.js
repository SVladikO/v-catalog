import {useState} from 'react';
import THEME from "../../theme";

import {
    Wrapper, InputStyle, Title, ToCenter, Table, RowDescription, InputWrapper,
    OvertimeHours, OvertimePrice, OvertimeTitle, OvertimeWrapper
} from './income-calculator.page.style';

import NumberInput from './components/NumberInput.component.js'
import PetProjectIntro from '../../components/pet-project-intro/pet-project-intro'

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
    const [monthIncome, setMonthIncome] = useState(1000);
    const [workDays, setWorkDays] = useState(21);
    const [workHours, setWorkHours] = useState(8);
    const [workYears] = useState(1);

    const [customCourse, setCustomCourse] = useState(40);
    const [customCurrencyName, setCustomCurrencyName] = useState('UAH');

    const convertHourIncomeToMonth = value => setMonthIncome(value * workDays * workHours);
    const convertDayIncomeToMonth = value => setMonthIncome(value * workDays);
    const convertYearIncomeToMonth = value => setMonthIncome(value / workYears / 12);

    const renderOvertimePrice = () => {
        const incomePerHour = monthIncome / workDays / workHours;
        const extraHours = (workHours - 8) * workDays;
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
                    <NumberInput label={"Salary per month"} value={customCourse} changeHandler={setCustomCourse}>
                        <InputStyle width='70px' value={customCurrencyName}
                                    onChange={e => setCustomCurrencyName(e.target.value)} color={THEME.COLOR.INVERT_0}/>
                        <span> = 1 USD</span>
                    </NumberInput>
                </>
            </div>
        )
    }

    const fixNumber = number => Number.parseFloat(number).toFixed(0)

    const HeaderRow = (
        <>
            <ToCenter>1 hour</ToCenter>
            <ToCenter>1 day</ToCenter>
            <ToCenter>1 month</ToCenter>
            <ToCenter>1 year</ToCenter>
            <ToCenter>10 year</ToCenter>

            <ToCenter>{fixNumber(monthIncome / workDays / workHours)}</ToCenter>
            <ToCenter>{fixNumber(monthIncome / workDays)}</ToCenter>
            <ToCenter>{fixNumber(monthIncome)}</ToCenter>
            <ToCenter>{fixNumber(monthIncome * 12)}</ToCenter>
            <ToCenter>{fixNumber(monthIncome * 12 * 10)}</ToCenter>
        </>
    );

    return (
        <>
            <InputWrapper>
                <NumberInput label={"Work hours per day"} value={workHours} changeHandler={setWorkHours}/>
                <NumberInput label={"Work days per month"} value={workDays} changeHandler={setWorkDays}/>
                <NumberInput label={"Salary per month"} value={monthIncome} changeHandler={setMonthIncome}/>
            </InputWrapper>
            <Table>
                {HeaderRow}
            </Table>
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

export default function IncomeCalculatorPage() {
    return (
        <Wrapper>
            <PetProjectIntro
                title={"Income calculator"}
                description={"We help you to calculate your income and see a bigger picture."}
            />
            <CurrencyTimeCalculator/>
        </Wrapper>
    )
}
