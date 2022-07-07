import styled from 'styled-components';
import THEME from "../../theme";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
`;

export const Package = styled.div`
  padding: 10px;
  margin: 20px 10px 0 ;
  box-sizing: border-box;
  border-bottom: solid 2px ${THEME.COLOR.INVERT_2};
`;

export const PackageTitle = styled.div`
  font-size: ${THEME.FONT.LARGE}px;
  font-weight: 900;
`;

export const TryOnline = styled.a`
  // font-size: ${THEME.FONT.LARGE}px;
  // font-weight: 900;
`;

export const Links = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: end;
  
  &>a {
    margin: 5px;
  }
  
  &>a:hover {
    font-weight: bold;
    font-family
    color: ${THEME.COLOR.INVERT_3}
  }
`;