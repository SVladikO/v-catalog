import styled from 'styled-components';
import THEME from "../theme";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
`;

export const PageTitle = styled.div`
    font-size: ${THEME.FONT.SIZE.MEDIUM}px;
    font-weight: 500;
    margin: 20px 0 40px;
`;

export const ItemTitle = styled.div`
    font-size: ${THEME.FONT.SIZE.MEDIUM}px;
//    margin: 20px 0 40px;
`;