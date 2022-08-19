import {Title, Description, Content} from "./introduction.style";
import {Button} from "../button/button.style";

    const title = "Вивчи Англійський алфавіт";
    const description = "Чи зможеш продиктувати своє імя і прізвище Англійською ?";
    const buttonTitle = "Перевірити себе";

export default function({handleClick}) {
    return (
        <Content>
            <Title>{ title}</Title>
            <Description>{ description}</Description>
            <Button onClick={handleClick}>{buttonTitle}</Button>
        </Content>
    )
};