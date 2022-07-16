import React from "react";

import Text from "../text/text.component";

import {Wrapper, LinkWrapper } from './Menu.style.js'

import {Link, useLocation} from 'react-router-dom';

function Menu({links}) {
  const itemWidth = 100 / links.length - 1 + '%';
const location = useLocation();
  return (
    <Wrapper>
      {
        links.map(
          (link) =>
          <LinkWrapper isSelected={location.pathname === link.path} style={{width: itemWidth}}>
            <Link
              key={link.title}

              to={link.path}
            >
              <Text translationKey={link.title}/>
            </Link>
            </LinkWrapper>
        )
      }
    </Wrapper>
  );
}

export default Menu;