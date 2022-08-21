import styled from 'styled-components';
import THEME from "../../theme";

export  const Wrapper = styled.div`
    position: relative;
`;

export  const Header = styled.div`
    cursor: pointer;
    color: ${THEME.COLOR.SECONDARY};
    font-size: ${THEME.FONT.SIZE.MEDIUM}px;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */

    &:hover {
       color: ${THEME.COLOR.PRIMARY};
    }
`;

export  const SelectWrapper = styled.div`
    position: absolute;
    top: 32px;
    right: 0;
`;

export  const Select = styled.div`
    position: relative;
    z-index: 20;
`;

export  const Option = styled.div`
    cursor: pointer;
    padding: 4px 8px;
    color: ${THEME.COLOR.INVERT_3};
    font-size: ${THEME.FONT.SIZE.MEDIUM}px;
    background: ${THEME.COLOR.SECONDARY_HOVER};

    &:hover {
      background: ${THEME.COLOR.PRIMARY}
    }
`;
