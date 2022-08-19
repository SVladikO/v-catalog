import styled, {css} from 'styled-components';

const wholeScreen = css`
    min-height: 100vh;
    width: 100vw;
`;
const absoluteState = css`
    position: absolute;
    top: 0;
    left: 0;
`;

export const Container = styled.div`
    ${absoluteState}
    ${wholeScreen}
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Background = styled.div`
    ${absoluteState}
    ${wholeScreen}
    background: #252525;
    opacity: 0.7;
    border: solid 3px green;
`;
export const ContentContainer = styled.div`
    width: 300px;
    background: #fff;
    border: solid 2px blue;
    z-index: 1;
    padding: 10px 20px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.div`
`;
export const Description = styled.div`
    color: red;
`;
