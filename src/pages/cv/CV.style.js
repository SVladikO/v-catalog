import styled from 'styled-components';
import THEME from '../../theme.js';

export const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 880px;
    margin: 0 auto;

    @media (max-width: 880px) {
        display: block;
        width: 100%;
    }
`;
export const ContentContainer = styled.div`
    box-sizing: border-box;
    padding: 0 10px;
    width: 600px;
    margin: 0 auto;

    @media (max-width: 610px) {
        width: 100%;
        padding: 0 16px;
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








