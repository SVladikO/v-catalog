import styled from 'styled-components';
import THEME from "../../theme";

export const Content = styled.div`
    border: solid 1px ${THEME.COLOR.INVERT_0};
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
`;

export  const Title = styled.div`
    text-align: center;
    font-size: ${THEME.FONT.SIZE.LARGE}px;
    font-weight: 600;
`;

export  const Row = styled.div`
    padding: 4px 0;
`;

export  const Description = styled.div`
    font-size: ${THEME.FONT.SIZE.MEDIUM}px;
    margin: 10px 20px 30px;
`;

