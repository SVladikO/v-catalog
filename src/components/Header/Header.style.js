import styled from 'styled-components';

import THEME from "../../theme";
import {ContentWidth} from '../common.style.js';

export const Wrapper = styled.div`
    z-index: 1;
    position: fixed;
    width: 100%;
    height: 46px;
    background-color: ${THEME.COLOR.INVERT_2};
    color: ${THEME.COLOR.SECONDARY};
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    max-width: ${ContentWidth}px;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    &>a:first-child {
        color: ${THEME.COLOR.PRIMARY};
        font-size: ${THEME.FONT.SIZE.MEDIUM}px;
    }
    &>div:nth-child(2) {
        @media only screen and (max-width: 600px) {
            display: none;
        }
    }
`;
