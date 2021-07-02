import styled from 'styled-components';

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 600px;
    margin: auto;
    
    @media (max-width: 800px) {
        width: auto;
        padding: 0 6px 0 10px;
        flex-direction: column;
    }
`;




