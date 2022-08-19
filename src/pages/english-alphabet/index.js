import {useState} from 'react';

import {AppTag, Input} from './App.style';
import Button from "./component/button/button.component";
import {Header} from "./App.style";
import './App.css';
import ButtonList from "./component/button-list/button-list.component";
// import Popup from "./component/popup2/popup.component";
import Popup from './component/popup/popup.component';
import Introduction from "./component/introduction/introduction.component";

function App() {
    let [englishText, changeEnglishText] = useState("")
    let [isPopupVisible, hidePopup] = useState(true);

    function switchPopup() {
        hidePopup(!isPopupVisible);
    }

    function clearState() {
        changeEnglishText("");
    }



    return (
        <AppTag>
            <Header>
                <Input type="text" value={englishText}/>
                <Button handleClick={clearState} title="X" minWidth={"18px"}/>
            </Header>
            <ButtonList englishText={englishText} changeEnglishText={changeEnglishText}/>
            {
                isPopupVisible
                    ? <Popup hidePopup={switchPopup}>
                        <Introduction handleClick={switchPopup}/>
                    </Popup>
                    : null
            }
        </AppTag>
    );
};

export default App;
