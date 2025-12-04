import styled from "styled-components";
import {widthCss} from "../Home.style";

export const BgWrapper = styled.div`
    background: white;
    width: 100vw;
    position: relative;
`;
export const AbstractImg = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    height: 300px;
    width: auto;

    @media only screen and (max-width: 1000px) {
        display: none;
    }
`;

export const Wrapper = styled.div`
    ${widthCss};
    
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 40px;
    padding-bottom: 70px;
    
`;
export const Title = styled.div`
    font-size: 24px;
    font-weight: 400;

    @media only screen and (max-width: 1000px) {
        text-align: center;
    }
`;
export const Email = styled.div`
    font-size: 19px;

    @media only screen and (max-width: 1000px) {
        text-align: center;
    }
`;
export const Contacts = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    
    @media only screen and (max-width: 1000px) {
        justify-content: center;
    }
`;
export const Developed = styled.div`
    display: flex;
    flex-direction: row;
    gap: 120px;
    @media only screen and (max-width: 1000px) {
        justify-content: center;
    }
`;
export const Dev = styled.div`

`;
export const DevLabel = styled.div`
    color: #858585;
`;
export const DevContact = styled.div`

`;
export const Made = styled.div`
    color: grey;
    margin: 0 auto;
    position: relative;
    z-index: 2;
`;
