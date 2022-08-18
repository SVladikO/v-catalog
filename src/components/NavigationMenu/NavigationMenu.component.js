import {useState, useMemo} from "react";
import {Link} from 'react-router-dom';

import {Wrapper } from './NavigationMenu.style.js'
import THEME from "../../theme";

import Text from "../text/text.component";

function NavigationMenu({links}) {
  const [pathname, setPathname] = useState(window.location.pathname);
  const itemWidth = 100 / links.length - 1 + 10 + '%';

  return (
    <Wrapper>
      {
        links.map(link => (
        <Link
              to={link.path}
              key={link.title}
              onClick={() => setPathname(link.path)}
              style={
                  {
                      width: itemWidth,
                      boxSizing: "border-box",
                      borderBottom: `solid 3px {pathname === link.path ?  THEME.COLOR.PRIMARY : THEME.COLOR.INVERT_2}`,
                  }
              }
            >
            <Text translationKey={link.title}/>
          </Link>
          ))
      }
    </Wrapper>
  );
}

export default NavigationMenu;