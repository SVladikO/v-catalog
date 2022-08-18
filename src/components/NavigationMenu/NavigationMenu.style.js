import styled from 'styled-components';
import THEME from "../../theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${THEME.COLOR.INVERT_2};
  height: 46px;
  align-items: stretch;

  & a {
      font-size: ${THEME.FONT.SIZE.SMALL}px;
      height: 100%;
      color: ${THEME.COLOR.SECONDARY};
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
  }
  & a:hover {
      color: ${THEME.COLOR.PRIMARY};
  }
    display: flex;

`;

