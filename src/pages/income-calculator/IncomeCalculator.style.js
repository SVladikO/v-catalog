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
  &:hover {
      background: ${THEME.COLOR.PRIMARY};
  }
`;
export const Label = styled.label`
    font-size: 28px;
    margin: 0px 30px 0px 6px;
    box-sizing: border-box;
    user-select: none;
`;
export const CheckboxMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0 20px 0;
`;
export const OvertimeWrapper = styled.div`
    margin: 10px 0 10px 0;
    height: 28px;

`;
export const OvertimePrice = styled.span`
    color: green;
    font-weight: 600;
`;
export const OvertimeHours = styled.span`
    color: red;
    font-weight: 600;
`;

export const RowDescription = styled.div`
    padding: 0 0 0 6px;
`;
export const BottomMenu = styled.div`
  max-width: ${max_width};
  margin: 60px auto 0;
`;
export const Table = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 20%;
      height: 170px;
      max-width: ${max_width};
      margin: 0px auto;
`;

export const EmptyMenuRow = styled.div`
  height: 30px;
`;
