import {useState} from 'react';

import {Header, AppTag, Input, ButtonList, Letter, ChangeOpacityTitle} from './EnglishAlphabet.style';
import PetProjectIntro from '../../components/pet-project-intro/pet-project-intro'

import alphabet from "./alphabet.json";

function EnglishAlphabet() {
    let [englishText, setEnglishText] = useState("");
    let [letterOpacity, setLetterOpacity] = useState('letterOpacity', 4);

    const deleteEnglishText = () => setEnglishText("");
    const deleteLastLetterFromEnglishText = () => setEnglishText(englishText.slice(0, -1));

    const addLetter = letter => () => setEnglishText(prevValue => prevValue + letter);
    const changeLetterOpacity = e => setLetterOpacity(e.target.value);


    let alphabetButtons = alphabet.map(
        ([letter, engTranscription]) =>
            <button key={engTranscription} onClick={addLetter(letter)} width="30%" style={{margin: '4px'}}>
                <Letter opacity={letterOpacity}>{letter}</Letter>[{engTranscription}]
            </button>
    );

    return (
        <div>
            <PetProjectIntro
                title={"English Alphabet spelling trenager"}
                description={"Try to spell your name, address etc. We created this page to help you improve your spelling skills."}
            />
            <AppTag>
                <Header>
                    <Input type="text" value={englishText} readOnly/>
                    <button minWidth={'50px'} onClick={deleteLastLetterFromEnglishText} style={{margin: '4px'}}>C
                    </button>
                    <button minWidth={'50px'} onClick={deleteEnglishText} style={{margin: '4px'}}>X</button>
                </Header>
                <ButtonList>
                    {alphabetButtons}
                </ButtonList>
                <ChangeOpacityTitle>Show/Hide letter in button</ChangeOpacityTitle>
                <input type="range" min="0" max="10" value={letterOpacity} onChange={changeLetterOpacity}/>
            </AppTag>
        </div>
    );
};

export default EnglishAlphabet;
