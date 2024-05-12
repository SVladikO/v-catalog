import styled from 'styled-components';
import THEME from "../../theme";

const max_width = '600px';

export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export const Title = styled.div`
    margin: 20px 0 40px;
    text-align: center;
    font-weight: bold;
    font-size: ${THEME.FONT.SIZE.LARGE}px;
`;

export const ToCenter = styled.div`
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 400;
`;

export const OutputTitle = styled.div`
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;
    text-align: center;
    margin: 90px 0 30px;
`;
export const InputStyle = styled.input`
    width: 100px;
    margin: 1px;
    height: 34px;
    box-sizing: border-box;
    font-size: ${THEME.FONT.SIZE.SMALL}px;
    ${p => p.color && `color: ${p.color}`};
`;

export const OvertimeWrapper = styled.div`
    margin: 10px 0 10px 0;
    height: 50px;
`;

export const OvertimePrice = styled.span`
    color: green;
    font-weight: 700;
`;

export const OvertimeTitle = styled.div`
    color: red;
    font-weight: 700;
`;

export const OvertimeHours = styled.span`
    color: red;
    font-weight: 700;
`;

export const RowDescription = styled.div`
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 40px;
`;

export const Table = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    max-width: ${max_width};
    margin: 0px auto;
`;
