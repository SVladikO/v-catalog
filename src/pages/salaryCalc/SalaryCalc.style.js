import styled from 'styled-components';
import THEME from "../../theme";

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

export const ContentToCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputStyle = styled.input`
  width: ${p => p.width || 100}px;
  margin: 1px;
  font-size: ${THEME.FONT.SIZE.SMALL}px;
  &:hover {
      background: ${THEME.COLOR.PRIMARY};
  }
`;

export const RowDescription = styled.div`
    padding: 0 0 0 6px;

    &::before {
        content: 'in '};
    }
`;
export const BottomMenu = styled.div`
  max-width: 320px;
  margin: 60px auto 0;
`;
export const CustomCurrencyWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Table = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 34%;
      height: 170px;
      max-width: 369px;
      margin: 0px auto;
`;

export const Wrapper2 = styled.div`
  width: 80%;
  margin: 0 auto;
`;
