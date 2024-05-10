import {NavLink} from 'react-router-dom';

import {Wrapper, Content, RightPart} from './Header.style.js';

import {ReactComponent as ArrowTopRightIcon} from "../../image/arrow-top-right.svg";

import {ROUTE_PATH, HEADER_MENU_LINKS} from "../../common/route";

import {GIT_LINK} from '../../common/link.js';

import Text from '../text/text.component';
import NavigationMenu from "../NavigationMenu/NavigationMenu.component";

import {websiteLanguages, defaultLanguage} from "../../common.dictionary";

export  default function Header({currentLanguage = defaultLanguage, setSiteLanguage}) {
  let filteredLanguages = websiteLanguages.filter(item => item.value !== currentLanguage);

  return (
    <Wrapper>
      <Content>
        <NavLink to={ROUTE_PATH.HOME}><Text translationKey={"svladiko"}/></NavLink>
        <NavigationMenu links={HEADER_MENU_LINKS}/>
        <RightPart>
            <a href={GIT_LINK} target="_blank" rel="noreferrer">GitHub <ArrowTopRightIcon /></a>
        </RightPart>
      </Content>
    </Wrapper>
  )
}
