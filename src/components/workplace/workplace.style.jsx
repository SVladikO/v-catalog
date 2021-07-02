import styled from 'styled-components';

export const WorkplaceContainer = styled.div`
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
    color: #b3b3b3;
`;
export const Location = styled.div`
    color: #b3b3b3;
`;
export const Responsibility = styled.div`
    margin: 5px 0;
`;
export const SubTitle = styled.div`
    font-weight: 600;
    margin: 6px 0 2px;
    color: #b3b3b3;
`;

export const Skills = styled.div`
    margin: 5px 0;
`;
