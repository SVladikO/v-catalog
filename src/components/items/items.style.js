import styled from "styled-components";

export const ScrollWrapper = styled.div`
    @media only screen and (max-width: 1200px) {
        width: 100vw;
        overflow-x: scroll;
        padding: 0 16px 0 0;
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 0 0 10px 0;

    @media only screen and (max-width: 1200px) {
        flex-wrap: nowrap;
        overflow-x: auto;
        
        & > div:last-child {
            margin: 0 24px 0 0;
        }
    }
`;