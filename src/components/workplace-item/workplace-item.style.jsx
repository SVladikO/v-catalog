import styled from 'styled-components';
import THEME from "../../theme";

export const MainContainer = styled.div`
    width: 600px;
    position: relative;
    font-family: 'Roboto';
    font-size: ${THEME.FONT.SIZE.MEDIUM}px;
    padding: 0 0 10px 46px;
    margin: 0 0 20px;
    border-bottom: solid 1px #d2d2d2;
    box-sizing: border-box;
    
    @media (max-width: 800px) {
        width: auto;
    }
`;

export const Position = styled.div`
    color: #000;
    margin: 0 0 4px 0;
`;
export const CompanyName = styled.div``;
export const TimeInterval = styled.div`
    color: #656464;
`;
export const Location = styled.div`
    color: #656464;
`;
export const Responsibility = styled.div`
    margin: 5px 0;
//     font-size: ${THEME.FONT.SIZE.SMALL}px;
`;
export const SubTitle = styled.div`
    margin: 6px 0 2px;
    color: ${THEME.COLOR.INVERT_2};
`;
export const Skills = styled.div`
    margin: 5px 0;
`;
