import styled, {css} from "styled-components";

export const Wrapper = styled.a`
    border: solid 2px #D9D9D9;
    padding: 10px;
    max-width: 500px;
    min-width: 500px;
    display: flex;
    justify-content: space-between;

    ${css`
        @media screen and (max-width: 700px) {
            max-width: 320px;
            min-width: 320px;
        }
    `}
`

export const Title = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: #000;
    margin: 0 0 10px;
`;
export const Skills = styled.div`
    font-size: 18px;
    color: #332828;
`;

export const Description = styled.div`
    font-size: 18px;
    color: #000;
`;

export const Left = styled.div`

`;

export const Img = styled.img`
    height: 200px;
    width: 200px;

    ${css`
        @media screen and (max-width: 700px) {
            height: 120px;
            width: 120px;
        `}
`;

export const Right = styled.div`
    min-width: 200px;
    max-width: 200px;
    min-height: 200px;
    max-height: 200px;
    background: #593535;
    margin: 0 0 0 10px;
    
    ${css`
        @media screen and (max-width: 700px) {
            min-width: 120px;
            max-width: 120px;
            min-height: 120px;
            max-height: 120px;
        `}
`