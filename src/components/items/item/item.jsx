import {Wrapper, Img, Title, Description, Left, Right} from './item.style.js';

export default function Item(props) {
    const {title, description, link, src} = props.item;

    return (
        <Wrapper href={link} target="_blank">
            <Left>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Left>
            <Right>
                <Img src={src} />
            </Right>

        </Wrapper>
    )
}