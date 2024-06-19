import {useState} from 'react';

import {
    Wrapper, OutputTitle, InputStyle, ToCenter, Table, InputWrapper,
} from './income-calculator.page.style';

import NumberInput from './components/NumberInput.component.js'
import PetProjectIntro from '../../components/pet-project-intro/pet-project-intro'

function MoneyCalculator() {
    const [monthIncome, setMonthIncome] = useState(1000);
    const [monthSaved, setMonthSaved] = useState(1000);
    const [workDays, setWorkDays] = useState(23);
    const [workHours, setWorkHours] = useState(8);
    const [workYears] = useState(1);

    const HeaderRow = (
        <>

            <ToCenter></ToCenter>
            <ToCenter>1 hour</ToCenter>
            <ToCenter>1 day</ToCenter>
            <ToCenter>1 month</ToCenter>
            <ToCenter>1 year</ToCenter>
            <ToCenter>10 year</ToCenter>

            <ToCenter>Income</ToCenter>
            <ToCenter>{addSeparator(monthIncome / workDays / workHours)}</ToCenter>
            <ToCenter>{addSeparator(monthIncome / workDays)}</ToCenter>
            <ToCenter>{addSeparator(monthIncome)}</ToCenter>
            <ToCenter>{addSeparator(monthIncome * 12)}</ToCenter>
            <ToCenter>{addSeparator(monthIncome * 12 * 10)}</ToCenter>

            <ToCenter>Saved</ToCenter>
            <ToCenter></ToCenter>
            <ToCenter></ToCenter>
            <ToCenter>{addSeparator(monthSaved)}</ToCenter>
            <ToCenter>{addSeparator(monthSaved * 12)}</ToCenter>
            <ToCenter>{addSeparator(monthSaved * 12 * 10)}</ToCenter>

            <ToCenter>Spent</ToCenter>
            <ToCenter></ToCenter>
            <ToCenter></ToCenter>
            <ToCenter>{addSeparator(monthIncome - monthSaved)}</ToCenter>
            <ToCenter>{addSeparator((monthIncome - monthSaved) * 12)}</ToCenter>
            <ToCenter>{addSeparator((monthIncome - monthSaved) * 12 * 10)}</ToCenter>
        </>
    );

    return (
        <>
            <InputWrapper>
                <NumberInput label={"Work hours per day"} value={workHours} changeHandler={setWorkHours}/>
                <NumberInput label={"Work days per month"} value={workDays} changeHandler={setWorkDays}/>
                <NumberInput label={"Salary per month"} value={monthIncome} changeHandler={setMonthIncome}/>
                <NumberInput label={"Save per month"} value={monthSaved} changeHandler={setMonthSaved}/>
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
                description={"We will help you to calculate your income in different time."}
            />
            <MoneyCalculator/>
        </Wrapper>
    )
}
