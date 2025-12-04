import styled from 'styled-components';
import THEME from "../../../theme";

export const ControlWrapper = styled.div`
    & > div.mobile { display: none; }
    
    @media (max-width: 800px) {
        & > div.desktop { display: none; }
        & > div.mobile { display: flex; }
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 20px 0 20px;
    border-bottom: solid 1px #E7E7E7;
    font-size: 18px;
`;

export const MainContainer = styled.div`
    width: 600px;
    position: relative;
    font-size: ${THEME.FONT.SIZE.MEDIUM}px;
    padding: 35px 28px 35px;
    margin: 0 0 2px;
    box-sizing: border-box;
    flex-direction: column;
    gap: 10px;
    background: white;

    @media (max-width: 800px) {
        width: auto;
    }
`;

export const Position = styled.div`
    color: #000;
    font-size: 22px;
    font-weight: 500;
`;
export const CompanyName = styled.div`
    color: ${THEME.COLOR.INVERT_3};
    font-size: 20px;
    font-weight: 500;
`;
export const TimeInterval = styled.div`
    color: #656464;
    font-size: 18px;
`;

export const Responsibility = styled.div`
    font-size: 20px;
    font-weight: 300;
`;
export const SubTitle = styled.div`
    color: ${THEME.COLOR.INVERT_2};
    font-weight: 400;
`;
export const Skills = styled.div`
    font-size: 20px;
`;
