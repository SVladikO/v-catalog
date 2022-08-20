import styled from 'styled-components';
import THEME from "../../theme";

export  const AppTag = styled.div`
    padding: 10px;
    max-width: 420px;
    margin: 0 auto;
    font-family: "Roboto", "Arial", sans-serif;
`;

export  const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    margin: 0 0 2px 0;
`;

export  const Input = styled.input`
    font-size: 18px;
    margin: 4px;
    width: 80%;
    padding: 4px 8px;
`;

export const ButtonList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const Letter = styled.span`
    padding: 0 4px 0 0;
    color: ${THEME.COLOR.INVERT_0};
    text-transform: uppercase;
    opacity: 0.4;
`;
