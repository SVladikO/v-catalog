import Item from './item/item';
import {Wrapper} from './items.style';

export default function Items(props) {
    return (
        <Wrapper>
            {props.items.map(item => <Item item={item} />)}
        </Wrapper>
    )
}