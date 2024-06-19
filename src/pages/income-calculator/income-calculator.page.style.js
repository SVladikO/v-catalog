import styled from 'styled-components';

const max_width = '600px';

export const Wrapper = styled.div`
`;

export const ToCenter = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    font-size: 24px;
    padding: 5px;
    border: solid 1px #d5d4d4;
`;

export const OutputTitle = styled.div`
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
    font-size: 22px;
    ${p => p.color && `color: ${p.color}`};
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 40px;
`;

export const Table = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.8fr 0.8fr 1fr 1fr 1fr;
    max-width: ${max_width};
    margin: 0px auto;
`;
