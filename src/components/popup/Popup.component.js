import {Wrapper, Content} from './Popup.style.js'

function Popup({closePopup, children}) {
    return (
        <Wrapper onClick={closePopup}>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
}

export default Popup;
