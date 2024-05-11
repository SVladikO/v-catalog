import styled from 'styled-components';
import THEME from "../../../theme";

export const MainContainer = styled.div`
    width: 600px;
    position: relative;
    font-size: ${THEME.FONT.SIZE.MEDIUM}px;
    padding: 35px 28px 0;
    margin: 0 0 20px;
    box-sizing: border-box;
    
    @media (max-width: 800px) {
        width: auto;
    }
`;

export const Position = styled.div`
    color: #000;
    margin: 0 0 4px 0;
    font-size: 20px;
    font-weight: 400;
`;
export const CompanyName = styled.div`
    margin: 5px 0 5px 0;
    color: ${THEME.COLOR.INVERT_3};
    font-size: 22px;
    font-weight: 500;
`;
export const TimeInterval = styled.div`
    color: #656464;
    font-size: 18px;
`;

export const Responsibility = styled.div`
    margin: 5px 0;
    font-size: 20px;
    font-weight: 300;
`;
export const SubTitle = styled.div`
    margin: 6px 0 2px;
    color: ${THEME.COLOR.INVERT_2};
    font-weight: 400;
`;
export const Skills = styled.div`
    margin: 5px 0;
    font-size: 20px;
`;
