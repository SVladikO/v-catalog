import styled from 'styled-components';
import THEME from "../../theme";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0 100px;
`;

export const Container = styled.div`
    min-width: 100vw;
    background-color: ${THEME.COLOR.INVERT_1};
    padding: 20px 0 70px;
`;
export const Avatar = styled.img`
    border-radius: 50%;
    height: 200px;
    margin: 0 auto;
    display: block;
`;
export const IntroductionTitle = styled.div`
    font-size: 45px;
    color: ${THEME.COLOR.PRIMARY};
    text-align: center;
    margin: 10px 0 0 0;
`;

export const IntroductionSubTitle = styled.div`
    font-size: 24px;
    color: ${THEME.COLOR.SECONDARY};
    text-align: center;
    margin-top: 15px;
`;
export const Experience = styled.div`
    padding: 50px 10px 0;
    width: 910px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media only screen and (max-width: ${THEME.MEDIA.TABLET}) {
        width: auto;
    }
`;
export const ExperienceColumn = styled.div`
    width: 205px;
    padding: 10px 10px 0;
`;
export const ColumnTitle = styled.div`
    color: ${THEME.COLOR.INVERT_2};
    margin: 0 0 20px;
    font-size: 20px;
    font-weight: 400;
`;
export const ColumnDetails = styled.div`
    color: ${THEME.COLOR.INVERT_1};
    font-size: 16px;
`;

export const RowWrapper = styled.div`
    padding: 100px 0 0;
    //border: solid 1px red;
`;

export const Companies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const CompaniesLogoTitle = styled.div`
    margin: 0  0 40px;
    font-size: 24px;
    font-weight: 400;
    text-align: center;

    @media only screen and (max-width: ${THEME.MEDIA.TABLET}) {
        margin: 10px 0;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 800px;
    padding: 0 20px;

    svg, img {
        height: 60px;
    }

    @media only screen and (max-width: ${THEME.MEDIA.TABLET}) {
        width: auto;
        flex-wrap: wrap;

        img {
            margin: 10px 5px;
            height: 40px;
        }
    }
`;
