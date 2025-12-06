import styled, {css} from 'styled-components';
import THEME from "../../theme";

export const widthCss = css`
    max-width: 1120px;
    width: 100vw;
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F3F3F3;
    overflow: hidden;
`;

export const ScrollDown = styled.a`
    margin: 140px auto 0;
    font-size: 22px;
`;

export const RowWrapper = styled.div`
    ${widthCss};
    position: relative;
    padding-bottom: 100px;
    padding-top: 70px;
    overflow: hidden;

    @media only screen and (max-width: 1200px) {
        padding-bottom: 10px;
    }
`;

export const CompaniesWrapper = styled.div`
    width: 100%;
    background: white;
    padding: 40px 0;
    
    
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 1000px) {
        padding: 40px 0 20px;
    }

`;
export const Companies = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: row;
    align-items: center;

    svg, img {
        filter: grayscale(100%);
        height: 50px;
    }
    
    svg:hover, img:hover {
        filter: grayscale(0%);
    }


    @media only screen and (max-width: 1000px) {
        width: 100vw;
        padding: 0 30px 20px;
        overflow-x: auto;
    }
`;

const fontCss = css`
    font-size: 36px;
    font-family: RobotoCondensedRegular;

`
export const CompaniesLogoTitle = styled.div`
    margin: 0 auto 40px;
    position: relative;
    z-index: 2;
    
    ${fontCss};

    @media only screen and (max-width: 1200px) {
        margin: 10px 0 16px;
    }
`;

export const CompaniesLogoTitle2 = styled.div`
    ${widthCss};
    ${fontCss};
    margin: 0 auto 40px;
    font-weight: 400;

    @media only screen and (max-width: ${THEME.MEDIA.TABLET}) {
        margin: 10px 0;
    }
`;
