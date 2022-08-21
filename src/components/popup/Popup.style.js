import styled from 'styled-components';
import THEME from "../../theme";

export  const Wrapper = styled.div`
    background: rgb(32 35 42 / 90%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export  const Content = styled.div`
    background: ${THEME.COLOR.SECONDARY};
    margin: 10px;
    padding: 15px;
    border-radius: 10px 15px;

`;
