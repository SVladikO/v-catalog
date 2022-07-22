import styled from 'styled-components';
import THEME from "../../theme";



export const Package = styled.div`
  padding: 10px;
  margin: 20px 10px 0 ;
  box-sizing: border-box;
  border-bottom: solid 2px ${THEME.COLOR.INVERT_2};
`;

export const PackageTitle = styled.div`
  font-size: ${THEME.FONT.SIZE.MEDIUM}px;
  font-weight: 500;
`;

export const PackageDescription = styled.div`
  font-size: ${THEME.FONT.SIZE.SMALL}px;
`;

export const TryOnline = styled.a`
`;

export const Links = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: end;
  
  &>a {
    margin: 5px;
    color: ${THEME.COLOR.INVERT_3};
  }
  
  &>a:hover {
    color: ${THEME.COLOR.PRIMARY}
  }
`;