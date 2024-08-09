import {Wrapper, Img, Title, Description, Left, Right, Skills} from './item.style.js';

export default function Item(props) {
    const {title, skills, description, link, src} = props.item;

    return (
        <Wrapper href={link} target="_blank">
            <Left>
                <Title>{title}</Title>
                <Skills><b>Skills:</b> {skills.join(', ')}.</Skills>
                <Description><b>Description:</b> {description}</Description>
            </Left>
            <Right>
                <Img src={src} />
            </Right>
        </Wrapper>
    )
}