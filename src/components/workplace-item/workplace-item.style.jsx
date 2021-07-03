import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 600px;
    position: relative;
    font-family: 'Roboto';
    font-size: 14px;
    padding: 0 0 10px 46px;
    margin: 0 0 20px;
    border-bottom: solid 1px #d2d2d2;
    box-sizing: border-box;
    
    @media (max-width: 800px) {
        width: auto;
    }
`;
export const CompanyLogo = styled.img`
    height: 36px;
    position: absolute;
    top: 0;
    left: 0;
`;
export const Position = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #000;
    margin: 0 0 4px 0;
`;
export const CompanyName = styled.div``;
export const TimeInterval = styled.div`
    color: #656464;
`;
export const Location = styled.div`
    color: #656464;
`;
export const Responsibility = styled.div`
    margin: 5px 0;
`;
export const SubTitle = styled.div`
    font-weight: 600;
    margin: 6px 0 2px;
    color: darkturquoise;
`;
export const Skills = styled.div`
    margin: 5px 0;
`;
