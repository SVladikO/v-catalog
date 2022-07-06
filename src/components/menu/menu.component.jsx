import React from "react";

import Text from "../text/text.component";

import './menu.style.scss'

import {Link} from 'react-router-dom';

function Menu({links}) {
  const itemWidth = 100 / links.length - 1 + '%';

  return (
    <div className="menu">
      {
        links.map(
          (link) =>
            <Link
              key={link.title}
              className="link"
              style={{width: itemWidth}}
              to={link.path}
            >
              <Text translationKey={link.title}/>
            </Link>
        )
      }
    </div>
  );
}

export default Menu;