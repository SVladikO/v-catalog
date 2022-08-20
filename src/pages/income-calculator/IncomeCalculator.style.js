import styled from 'styled-components';
import THEME from "../../theme";

const max_width = '369px';

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

export const ToCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputStyle = styled.input`
  width: ${p => p.width || '130px'};
  margin: 1px;
  height: 28px;
  box-sizing: border-box;
  font-size: ${THEME.FONT.SIZE.SMALL}px;
  ${p => p.color && `color: ${p.color}`};
`;

export const OvertimeWrapper = styled.div`
    margin: 10px 0 10px 0;
    height: 50px;
`;

export const OvertimePrice = styled.span`
    color: green;
    font-weight: 700;
`;

export const OvertimeTitle = styled.div`
    color: red;
    font-weight: 700;
`;

export const OvertimeHours = styled.span`
    color: red;
    font-weight: 700;
`;

export const RowDescription = styled.div`
`;

export const BottomMenu = styled.div`
  max-width: ${max_width};
  margin: 60px auto 0;
`;

export const Table = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 20%;
      max-width: ${max_width};
      margin: 0px auto;
`;
