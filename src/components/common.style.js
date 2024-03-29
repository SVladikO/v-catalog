import styled from 'styled-components';
import THEME from "../theme";

export const ContentWidth = 1000;

export const InvisibleWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    box-sizing: border-box;
`;

export const Wrapper = styled.div`
  max-width: ${ContentWidth}px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
`;

export const PageTitle = styled.div`
    font-size: ${THEME.FONT.SIZE.LARGE}px;
//    text-transform: uppercase;
    font-weight: 500;
    margin: 20px 0 30px;
    text-align: center;
`;

export const CategoryTitle = styled.div`
    font-size: ${THEME.FONT.SIZE.SMALL}px;
    font-weight: 600;
    margin: 20px 0 4px;
`;
export const ItemTitle = styled.div`
    font-size: ${THEME.FONT.SIZE.SMALL}px;
    position: relative;
    width: 250px;
    padding: 4px 6px 4px 5px;
    color: ${THEME.COLOR.INVERT_0};

    &:hover {
        background: ${THEME.COLOR.BLACK};
    }

    &:hover > svg {
            position: absolute;
        }
    }
    & > svg {
            display: none;
            position: absolute;
            right: 4px;
            top: 6px;
        }
    }
    &:hover > svg {
        display: block;
    }
`;