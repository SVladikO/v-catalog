import styled from "styled-components";

export const ContentContainer = styled.div`
    padding: 30px 15px;
    background: rgb(247 247 247);
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const detailsChild = styled.div`
    margin: 8px 0;
    font-size: 14px;
    font-family: Roboto, sans-serif;
`;
export const Name = styled.div`
    font-size: 24px;
    font-family: Roboto;
    margin: 0 0;
`;
export const Location = styled(detailsChild)`
    color: darkturquoise;
;
`;
export const ContactTitle = styled.div`
    margin: 12px 0;
    color: #000;
    font-family: Roboto;
`;

export const Clipboards = styled(detailsChild)`
    display: flex;
    flex-direction: column;
`;
export const Phone = styled(detailsChild)``;
export const Email = styled(detailsChild)``;
export const Skype = styled(detailsChild)``;