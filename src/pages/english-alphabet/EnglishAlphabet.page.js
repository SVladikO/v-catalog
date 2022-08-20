import {useState} from 'react';

import {Header, AppTag, Input, ButtonList, Letter, ChangeOpacityTitle} from './EnglishAlphabet.style';

import alphabet from "./alphabet.json";
import useLocalStorage from '../../hooks/useLocalStorage.js'

import Popup from '../../components/popup';
import {LightButton} from "../../components/button/button.style";
import Introduction from "../../components/Introduction/Introduction.component";

function EnglishAlphabet() {
    let [englishText, setEnglishText] = useState("");
    let [ isOpenPopup, setIsOpenPopup] = useLocalStorage(' isOpenIntroAlphabetPopup', true);
    let [ letterOpacity, setLetterOpacity] = useLocalStorage('letterOpacity', 4);

    const closePopup = () => setIsOpenPopup(!isOpenPopup);
    const deleteEnglishText = () => setEnglishText("");
    const deleteLastLetterFromEnglishText = () => setEnglishText(englishText.slice(0, -1));

    const addLetter = letter => () => setEnglishText(prevValue => prevValue + letter);
    const changeLetterOpacity = e => setLetterOpacity(e.target.value);


    let alphabetButtons = alphabet.map(
        ([letter, engTranscription]) =>
            <LightButton key={engTranscription} onClick={addLetter(letter)} width="30%" style={{margin: '4px'}} >
                <Letter opacity={letterOpacity}>{letter}</Letter>[{engTranscription}]
            </LightButton>
    );

    return (
        <AppTag>
            <div>Practice English alphabet</div>
            <Header>
                <Input type="text" value={englishText} readOnly/>
                <LightButton minWidth={'50px'} onClick={deleteLastLetterFromEnglishText} style={{margin: '4px'}}>C</LightButton>
                <LightButton minWidth={'50px'} onClick={deleteEnglishText} style={{margin: '4px'}}>X</LightButton>
            </Header>
            <ButtonList>
                {alphabetButtons}
            </ButtonList>
            <ChangeOpacityTitle>Show/Hide letter in button</ChangeOpacityTitle>
            <input type="range" min="0" max="10" value={letterOpacity} onChange={changeLetterOpacity} />

            {
                 isOpenPopup
                    ? <Popup closePopup={closePopup}>
                        <Introduction
                            title='English Alphabet'
                            description={
                                [
                                 "Hi.",
                                 "- Can you spell your name or maybe address ?",
                                 "If no - this page can help."
                                 ]}
                            buttonTitle="Let's practice ?)"
                            handleClick={closePopup}
                        />
                    </Popup>
                    : null
            }
        </AppTag>
    );
};

export default EnglishAlphabet;
