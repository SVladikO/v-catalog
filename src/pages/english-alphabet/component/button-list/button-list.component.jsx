import alphabet from "../../alphabet.json";
import Button from "../button/button.component";
import {ButtonListTag} from "./button-list.style";

function ButtonList({englishText, changeEnglishText }) {

    function addLetter(letter) {
        changeEnglishText(englishText + letter);
    }

    let buttonList = [];

    for (let key in alphabet) {
        buttonList.push(
            <Button key={key}
                title={alphabet[key]}
                handleClick={() => addLetter(key)}
            />
        );
    }

    return (
        <ButtonListTag>
            {
                buttonList
            }
        </ButtonListTag>
    )
}

export default ButtonList;