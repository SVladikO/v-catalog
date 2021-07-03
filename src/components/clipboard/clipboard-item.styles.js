import styled from 'styled-components';

export const ContentContainer = styled.div`
    display: flex;
    height: 26px;
    margin: 2px 0;
`;
export const Input = styled.input`
    border-radius: 6px 0 0 6px;
    border: solid 1px #000;
    padding: 5px 12px;
`;
export const TooltipContainer = styled.div`
    position: absolute;
    top: -32px;
    left: -30px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
`;
export const Tooltip = styled.div`
    background: darkturquoise;
    border-radius: 2px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 4px;
    font-size: 10px;
`;
export const Triangle = styled.div`
    width: 0; 
    height: 0; 
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid darkturquoise;
`;
export const Button = styled.button`
    border-radius: 0 6px 6px 0;
    border: solid 1px #000;
    padding: 5px 12px;
    background: #21262d;
    position: relative;
    cursor: pointer;
    
    &:hover {
        div {
            display: ${ props => !props.isClipboardClicked ? 'none': 'flex'};
        }
    }
`;




