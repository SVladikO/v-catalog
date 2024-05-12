import {Wrapper, Title, Description, Left, Right} from './item.style.js';

export default function Item(props) {
    const {title, description, link} = props.item;

    return (
        <Wrapper href={link} target="_blank">
            <Left>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Left>
            <Right></Right>

        </Wrapper>
    )
}