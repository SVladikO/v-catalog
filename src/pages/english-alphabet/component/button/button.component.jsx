import {ButtonTag} from "./button.style";

function Button({title, handleClick, minWidth}) {
    return (
        <ButtonTag onClick={handleClick} minWidth={minWidth}>{title}</ButtonTag>
    )
}

export default Button;