import styled from "styled-components";
import {widthCss} from "../Home.style";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    padding: 230px 16px 10px;
    overflow: hidden;
    ${widthCss};
`;


export const ExtraContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 88px;
    margin: 30px 0 0 0;
`;
export const ExtraContent = styled.div`
    width: 100px;
`;
export const ExtraContentHeader = styled.div`
    font-size: 40px;
    font-family: RobotoCondensedRegular;
`;
export const ExtraContentBody = styled.div`
    font-size: 16px;
`;

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: absolute;
    top: 108px;
    right: 16px;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: 50%;
`;

export const ImgBg = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    height: 600px;
    width: 600px;
`;
export const Position = styled.div`
    color: #000;
    font-size: 36px;
    font-weight: 400;
    font-family: RobotoCondensedRegular;
`;

export const PIB = styled.div`
    color: #008433;
    font-size: 72px;
    font-family: RobotoCondensedMedium;
    font-weight: 500;
`;
