import {Title, Description, Row, Content} from "./Introduction.style";
import {LightButton} from "../button/button.style";

export default function Introduction({title, description, buttonTitle, handleClick}) {
    return (
        <Content onClick={e => e.stopPropagation()}>
            {title && <Title>{title}</Title>}
            {description && (
                <Description>
                    {description.map(row => <Row>{row}</Row>)}
                </Description>
                )
            }
            <LightButton onClick={handleClick}>{buttonTitle}</LightButton>
        </Content>
    )
};