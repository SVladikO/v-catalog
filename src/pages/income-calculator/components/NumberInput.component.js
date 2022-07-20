import styled from 'styled-components';
import THEME from "../../../theme";

import {InputStyle} from '../IncomeCalculator.style';

const Wrapper = styled.span`
    display: flex;
    align-items: center;
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
`;

function NumberInput({value, changeHandler, children}) {
    return (
        <Wrapper>
            <NumberButton onClick={() => changeHandler(value-1)}>-</NumberButton>
            <InputStyle value={value} onChange={e => changeHandler(e.target.value)} width={30} />
            <NumberButton onClick={() => changeHandler(value+1)}>+</NumberButton>
            <ChildWrapper>{children}</ChildWrapper>
        </Wrapper>
    )
}

export default NumberInput;