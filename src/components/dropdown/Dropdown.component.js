import {useState} from "react";
import {Wrapper, Header, SelectWrapper, Select, Option } from './Dropdown.styles.js';
import {InvisibleWrapper} from '../common.style.js';

function Dropdown ({options, title, selected = {title: '?'}, handleSelect}) {
    const [isOpen, setIsOpen] = useState(false)

    const hideDropdown = () => setIsOpen(false);
    const openDropdown = () => setIsOpen(true);

    const selectOption = option => () => {
        hideDropdown();
        handleSelect(option.value);
    }

    return (
      <Wrapper>
        <Header onClick={openDropdown}>
         {title
            ? title
            : selected.title
         }
        </Header>
        {
          isOpen
           ? <SelectWrapper>
              <InvisibleWrapper onClick={hideDropdown}/>

              <Select onClick={e => e.stopPropagation()}>
                {
                  options.map(o =>
                    <Option
                        key={o.value}
                        onClick={selectOption(o)}
                    >
                       {o.title}
                    </Option>
                  )
                }
              </Select>
            </SelectWrapper>
           : null
        }
      </Wrapper>
    )
}

export default Dropdown;