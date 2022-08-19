import {Container, ContentContainer, Title, Description, Background} from "./popup.style";
import Button from '../button/button.component';

function Popup({title, description, buttonTitle}) {
    return (
        <Container>
            <Background />
            <ContentContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Button title={buttonTitle}/>
            </ContentContainer>
        </Container>
    );
}

export default Popup;