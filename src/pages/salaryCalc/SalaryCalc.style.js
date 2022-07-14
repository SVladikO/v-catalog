import styled from 'styled-components';
import THEME from "../../theme";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.div`
  margin: 10px 0 40px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;


export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 1px red;
  width: 180px;
`;

export const InputStyle = styled.input`
  width: ${p => p.width || 70}px;
  border: ${THEME.COLOR.PRIMARY} solid 1px;
  margin: 1px;
`;

export const RowDescription = styled.div`
`;
export const BottomMenu = styled.div`
  max-width: 320px;
  margin: 40px auto 0;
`;
export const Table = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 25%;
  max-width: 320px;
  margin: 0 auto;
`;

export const Wrapper2 = styled.div`
  width: 80%;
  margin: 0 auto;
`;