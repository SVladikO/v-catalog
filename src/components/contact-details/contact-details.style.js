import styled from "styled-components";
import THEME from '../../theme';

export const ContentContainer = styled.div`
    padding: 30px 15px;
    background-color: ${THEME.COLOR.LIGHT_1};
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const detailsChild = styled.div`
    margin: 8px 0;
    font-size: 14px;
`;
export const Avatar = styled.img`
//    border-radius: 50%;
//    height: 140px;
border-radius: 50%;
    height: 200px;
    margin: 0 auto;
    display: block;
`;
export const Name = styled.div`
    font-size: 24px;
    margin: 0 0;
`;
export const Location = styled(detailsChild)`
    color: ${THEME.COLOR.PRIMARY};
;
`;
export const ContactTitle = styled.div`
    margin: 12px 0;
    color: #000;
`;

export const Clipboards = styled(detailsChild)`
    display: flex;
    flex-direction: column;
`;
export const Phone = styled(detailsChild)``;
export const Email = styled(detailsChild)``;
export const Skype = styled(detailsChild)``;