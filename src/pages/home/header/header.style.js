import styled from "styled-components";
import {widthCss} from "../Home.style";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;
    background: white;
    width: 100vw;
    box-shadow: 0 2px 4px #0000004d;
`;

export const InnerWrapper = styled.div`
    ${widthCss};
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;


`;
export const Logo = styled.div`
    font-size: 24px;
    font-weight: 400;
`;
export const Navigation = styled.div`
    
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media only screen and (max-width: 750px) {
        display: none;
    }

`;
export const NavigationItem = styled.a`
    font-size: 18px;
    
    &:hover {
        color: #008433;
        cursor: pointer;
    }
`;

