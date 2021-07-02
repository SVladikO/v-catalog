import styled from "styled-components";

export const ContactDetails = styled.div`
    padding: 30px 15px;
    background: rgb(247 247 247);
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
    color: #b3b3b3;
`;
export const ContactTitle = styled.div`
    margin: 12px 0;
`;
export const Phone = styled(detailsChild)``;
export const Email = styled(detailsChild)``;
export const Skype = styled(detailsChild)``;