import styled from 'styled-components';
import THEME from "./theme";

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

    .link {
      font-family: Roboto;
    }

    @media only screen and (max-width: 600px) {
        display: block;
    }

`;

