import styled from 'styled-components';

export const LightButton = styled.button`
    font-size: 18px;
    font-weight: 600;
    padding: 12px 4px;
    margin: 2px;
    appearance: none;
    // background-color: #0030ff;
    color: #000;
    font-family: Roboto;
    background-color: #fff;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    position: relative;
    transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
    flex: 1 1 0px;
    min-width: ${ props => props.minWidth ? props.minWidth : "30%" };
    overflow: hidden;
    -webkit-appearance: none;
    border: solid 1px #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

