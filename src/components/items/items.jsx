import Item from './item/item';
import {Wrapper, ScrollWrapper} from './items.style';

export default function Items(props) {
    return (
        <ScrollWrapper>
            <Wrapper className='t-ItemWrapper'>
                {props.items.map(item => <Item item={item}/>)}
            </Wrapper>
        </ScrollWrapper>
    )
}