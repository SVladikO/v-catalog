import {Title, Description, Content} from "./introduction.style";
import {LightButton} from "../../../../components/button/button.style";

    const title = "Вивчи Англійський алфавіт";
    const description = "Чи зможеш продиктувати своє імя і прізвище Англійською ?";
    const buttonTitle = "Перевірити себе";

export default function Introduction({handleClick}) {
    return (
        <Content>
            <Title>{title}</Title>
            <Description>{ description}</Description>
            <LightButton onClick={handleClick}>{buttonTitle}</LightButton>
        </Content>
    )
};