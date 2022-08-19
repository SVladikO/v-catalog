import {Title, Description, Content} from "./introduction.style";
import Button from "../button/button.component";

let introductionData = {
    title: "Вивчи Англійський алфавіт",
    description: "Чи зможеш продиктувати своє імя і прізвище Англійською ?",
    buttonTitle: "Перевірити себе"
};

function Introduction({handleClick}) {
    return (
        <Content>
            <Title>{introductionData.title}</Title>
            <Description>{introductionData.description}</Description>
            <Button handleClick={handleClick} title={introductionData.buttonTitle} />
        </Content>
    )
}

export default Introduction;