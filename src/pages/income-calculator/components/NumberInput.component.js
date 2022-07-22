import styled from 'styled-components';
import THEME from "../../../theme";

import {InputStyle} from '../IncomeCalculator.style';

const Wrapper = styled.span`
    display: flex;
    align-items: center;
    height: 30px;
`;

const NumberButton = styled.button`
    color: ${THEME.COLOR.INVERT_1};
    border: none;
    border-radius: 2px;
    height: 28px;
    width: 28px;
    margin: 0 2px 0 2px;
`;

const ChildWrapper = styled.span`
    margin: 0 0 0 6px;
    ${p => p.color && `color: ${p.color}`}
`;

function NumberInput({value, changeHandler, children}) {
    return (
        <Wrapper>
            <NumberButton onClick={() => changeHandler(value-1)}>-</NumberButton>
            <InputStyle value={value} onChange={e => changeHandler(+e.target.value)} width='60px' color={THEME.COLOR.INVERT_0} borderColor={THEME.COLOR.INVERT_0}/>
            <NumberButton onClick={() => changeHandler(value+1)}>+</NumberButton>
            <ChildWrapper color={THEME.COLOR.INVERT_0}>{children}</ChildWrapper>
        </Wrapper>
    )
}

export default NumberInput;