import {useState} from 'react';

import alphabet from "./alphabet.json";

import './App.css';
import {Header} from "./App.style";
import {AppTag, Input, ButtonList} from './App.style';

import useLocalStorage from '../../hooks/useLocalStorage.js'

import Popup from './component/popup/popup.component';
import {Button} from "./component/button/button.style";
import Introduction from "./component/introduction/introduction.component";

function App() {
    let [englishText, setEnglishText] = useState("");
    let [ isOpenIntroductionPopup, setIsOpenIntroductionPopup] = useLocalStorage(' isOpenIntroductionPopup', true);

    const deleteEnglishText = () => setEnglishText("");
    const handleSwitchPopup = () => setIsOpenIntroductionPopup(!isOpenIntroductionPopup);
    const deleteLastLetterFromEnglishText = () => setEnglishText(englishText.slice(0, -1));

    const addLetter = letter => () => setEnglishText(prevValue => prevValue + letter);

    let alphabetButtons = alphabet.map(
        ([letter, uaTranscription, engTranscription]) =>
            <Button key={uaTranscription} onClick={addLetter(letter)}>
                {letter} [{engTranscription}]
            </Button>
    );

    return (
        <AppTag>
            <Header>
                <Input type="text" value={englishText} readOnly/>
                <Button minWidth={'50px'} onClick={deleteLastLetterFromEnglishText} >C</Button>
                <Button minWidth={'50px'} onClick={deleteEnglishText}>X</Button>
            </Header>
            <ButtonList>
                {alphabetButtons}
            </ButtonList>
            <div>Show letters</div>
            <div>UA transcription</div>
            <div>EN transcription</div>

            {
                 isOpenIntroductionPopup
                    ? <Popup switchPopup={handleSwitchPopup}>
                        <Introduction handleClick={handleSwitchPopup}/>
                    </Popup>
                    : null
            }
        </AppTag>
    );
};

export default App;
