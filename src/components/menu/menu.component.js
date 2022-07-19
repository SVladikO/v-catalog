import React from "react";

import Text from "../text/text.component";

import {Wrapper, LinkWrapper } from './Menu.style.js'

import {Link} from 'react-router-dom';

function Menu({links}) {
  const [pathname, setPathname] = React.useState(window.location.pathname);
  const itemWidth = 100 / links.length - 1 + '%';

  return (
    <Wrapper>
      {
        links.map(link =>
          <LinkWrapper key={link.title} isSelected={pathname === link.path} style={{width: itemWidth}}>
            <Link to={link.path} onClick={() => setPathname(link.path)}>
              <Text translationKey={link.title}/>
            </Link>
            </LinkWrapper>
        )
      }
    </Wrapper>
  );
}

export default Menu;