import styled from 'styled-components';
import THEME from "../../../theme";

import {InputStyle} from '../income-calculator.page.style';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 350px;
    margin: 0 auto 15px;
`;
const Label = styled.div`
    font-size: 24px;
`;
const InputWrapper = styled.span`
    display: flex;
    align-items: center;
    height: 30px;
    width: 100px;
    
`;

function NumberInput({label, value, changeHandler}) {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <InputWrapper>
                <InputStyle
                    type='number'
                    value={value}
                    onChange={e => changeHandler(+e.target.value)} width='60px'
                    borderColor={THEME.COLOR.INVERT_0}/>
            </InputWrapper>
        </Wrapper>
    )
}

export default NumberInput;