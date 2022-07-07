import {FlexWrapper} from "./Flex.style";

function Flex({children, jc_end, jc_space_between}) {
  //jc_ = justify_content

  const jc = [
    {is: jc_end, value: 'end'},
    {is: jc_space_between, value: 'space-between'},
  ].find(i => i.is);

  const style = {
    display: 'flex'
  }

  if (jc) {
    style['justify-content'] = jc.value;
  }

  return (
    <FlexWrapper style={style}>
      {children}
    </FlexWrapper>
  )

}

export default Flex;