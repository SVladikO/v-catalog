import styled from 'styled-components';
import THEME from "../../theme";

export const LightButton = styled.button`
    ${ (p => p.width ? {width:  p.width} : {}) };

    border-radius: 4px;
    border: solid 1px #000;

    font-size: ${THEME.FONT.SIZE.SMALL}px;
    font-family: Roboto;
    font-weight: 600;

    padding: 6px 10px;
    color: #000;
    background-color: #fff;

    cursor: pointer;

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${THEME.COLOR.SECONDARY_HOVER};
    }

`;

