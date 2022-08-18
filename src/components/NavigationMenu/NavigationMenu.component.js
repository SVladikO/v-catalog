import {memo} from "react";
import {NavLink} from 'react-router-dom';

import {Wrapper } from './NavigationMenu.style.js'

import Text from "../text/text.component";

function NavigationMenu(props) {
  const itemWidth = 100 / props.links.length - 1 + 10 + '%';

  return (
    <Wrapper>
      {
        props.links.map(link => (
            <NavLink
              className={
                isActive => "nav-link" + (link.path === window.location.pathname ? " nav-link-active" : "")
              }
              to={link.path}
              key={link.title}
              style={{width: itemWidth}}
            >
              <Text translationKey={link.title}/>
            </NavLink>
        ))
      }
    </Wrapper>
  );
}

export default memo(NavigationMenu);