import {useState} from 'react';

import {Header, AppTag, Input, ButtonList, Letter} from './EnglishAlphabet.style';

import alphabet from "./alphabet.json";
import useLocalStorage from '../../hooks/useLocalStorage.js'

import Popup from './component/popup/popup.component';
import {Button} from "./component/button/button.style";
import Introduction from "./component/introduction/introduction.component";

function EnglishAlphabet() {
    let [englishText, setEnglishText] = useState("");
    let [ isOpenIntroductionPopup, setIsOpenIntroductionPopup] = useLocalStorage(' isOpenIntroductionPopup', true);

    const deleteEnglishText = () => setEnglishText("");
    const handleSwitchPopup = () => setIsOpenIntroductionPopup(!isOpenIntroductionPopup);
    const deleteLastLetterFromEnglishText = () => setEnglishText(englishText.slice(0, -1));

    const addLetter = letter => () => setEnglishText(prevValue => prevValue + letter);

    let alphabetButtons = alphabet.map(
        ([letter, engTranscription]) =>
            <Button key={engTranscription} onClick={addLetter(letter)}>
                <Letter>{letter}</Letter>[{engTranscription}]
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

export default EnglishAlphabet;
