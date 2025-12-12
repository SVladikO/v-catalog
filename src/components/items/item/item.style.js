import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    z-index: 2;
    box-sizing: border-box;
    background: white;
    padding: 24px;

    border: solid 1px #E7E7E7;
    border-radius: 6px;
    box-sizing: border-box;

    min-height: 294px;
    
    width: 528px;
    min-width: 528px;
    max-width: 528px;
    
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
        width: 320px;
        min-width: 320px;
        max-width: 320px;
        
        min-height: 486px;
    }
   
`
export const LinkWrapper = styled.div`
    display: flex;
    gap: 15px;
    font-size: 16px;

`;
export const PrimaryLink = styled.a`
    border: solid 1px black;
    padding: 2px 6px;
    border-radius: 4px;
`;
export const SecondaryLink = styled.a`
    color: #006E2B;
    border: solid 1px #006E2B;
    padding: 2px 6px;
    border-radius: 4px;
`
export const Title = styled.div`
    font-size: 24px;
    font-family: RobotoFlex;
    font-weight: 400;
    color: #000;
    margin: 0 0 10px;
`;
export const Skill = styled.div`
    background: #F3F3F3;
    color: #000;
    font-weight: 300;
    padding: 2px 4px;
    border-radius: 2px;
    font-size: 16px;
    font-family: RobotoFlex;
    font-weight: 400;
`;

export const Skills = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 18px;
`;

export const Description = styled.div`
    font-size: 18px;
    color: #000;
    font-weight: 300;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Img = styled.img`
    height: 200px;
    width: 200px;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 200px;
    min-height: 200px;
`