import styled from 'styled-components';
import THEME from "./theme";

export const Wrapper = styled.div`
`;

export const Content = styled.div`
    padding: 46px 0 120px;
    font-size: ${THEME.FONT.SIZE.SMALL}px;
`;

export const BottomMenuMobile = styled.div`
    display: none;
    position: fixed;
    bottom: 0px;
    z-index: 1;
    width: 100%;
    border-top: solid 0.1px #2f323a;

    .menu {
      justify-content: space-around;
      height: 60px;
    }

    @media only screen and (max-width: 600px) {
        display: block;
    }

`;

