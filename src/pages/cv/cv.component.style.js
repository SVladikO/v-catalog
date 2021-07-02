import styled from 'styled-components';

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 600px;
    margin: auto;
`;
export const WorkplaceTitle = styled.div`
    padding: 12px 0 12px 0;
    font-family: Roboto;
`;
export const ContactDetails = styled.div`
    padding: 30px 15px;
    background: rgb(247 247 247);
}
`;
export const PositionTitle = styled.div`
    text-align: center;
    font-size: 24px;
    font-family: Roboto;
    margin: 30px 0 0;
`;
export const PositionSubTitle = styled.div`
    text-align: center;
    font-family: Roboto;
    color: #b3b3b3;
    margin: 6px 0 40px;
    font-size: 14px;
`;
export const ContactTitle = styled.div`
    margin: 12px 0;
`;
export const Name = styled.div`
    font-size: 24px;
    font-family: Roboto;
    margin: 0 0;
`;
const detailsChild = styled.div`
    margin: 8px 0;
    font-size: 14px;
    font-family: Roboto, sans-serif;
`;
export const Location = styled(detailsChild)`
    color: #b3b3b3;
`;
export const Phone = styled(detailsChild)``;
export const Email = styled(detailsChild)``;
export const Skype = styled(detailsChild)``;