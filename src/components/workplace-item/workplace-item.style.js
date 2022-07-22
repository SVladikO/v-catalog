import styled from 'styled-components';
import THEME from "../../theme";

export const MainContainer = styled.div`
    width: 600px;
    position: relative;
    font-size: ${THEME.FONT.SIZE.MEDIUM}px;
    padding: 20px 28px 10px 0;
    margin: 0 0 20px;
    box-sizing: border-box;
    
    @media (max-width: 800px) {
        width: auto;
    }
`;

export const Position = styled.div`
    color: #000;
    margin: 0 0 4px 0;
`;
export const CompanyName = styled.div`
    margin: 5px 0 5px 0;
    color: ${THEME.COLOR.INVERT_3}
`;
export const TimeInterval = styled.div`
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
