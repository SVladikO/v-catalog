import styled from 'styled-components';
import THEME from '../../theme.js';


export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    margin: auto;

    @media (max-width: 800px) {
        width: auto;
        padding: 0 6px 0;
        flex-direction: column;
    }
`;
export const PositionTitle = styled.div`
    font-size: 42px;
    font-weight: 700;
    margin: 40px 0 20px;
`;
export const About = styled.div`
    font-size: ${THEME.FONT.SIZE.MEDIUM}px;
    font-weight: 500;
    color: ${THEME.COLOR.FILL_1};
`;
export const Salary = styled.span`
    color: ${THEME.COLOR.PRIMARY};
`;
export const ExperienceTitle = styled.div`
    padding: 12px 0 12px 0;
    font-size: ${THEME.FONT.SIZE.MEDIUM}px;
    font-weight: 500;
`;
export const ExperienceSubTitle = styled.div`
    font-size: ${THEME.FONT.SIZE.SMALL}px;
    color: ${THEME.COLOR.FILL_1};
    font-weight: 500;

`;








