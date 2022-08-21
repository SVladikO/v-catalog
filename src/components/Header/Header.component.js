import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {createStructuredSelector} from "reselect";

import {Wrapper, Content, RightPart} from './Header.style.js';

import {ReactComponent as ArrowTopRightIcon} from "../../image/arrow-top-right.svg";

import {ROUTE_PATH, HEADER_MENU_LINKS} from "../../common/route";

import {GIT_LINK} from '../../common/link.js';

import Text from '../text/text.component';
import Dropdown from "../Dropdown/Dropdown.component";
import NavigationMenu from "../NavigationMenu/NavigationMenu.component";

import {websiteLanguages, defaultLanguage} from "../../common.dictionary";

import {setSiteLanguage} from '../../redux/config/config.actions'
import {selectCurrentLanguage} from "../../redux/config/config.selector";

function Header({currentLanguage = defaultLanguage, setSiteLanguage}) {
  let filteredLanguages = websiteLanguages.filter(item => item.value !== currentLanguage);

  return (
    <Wrapper>
      <Content>
        <NavLink to={ROUTE_PATH.HOME}><Text translationKey={"$HEADER.LOGO.TEXT"}/></NavLink>
        <NavigationMenu links={HEADER_MENU_LINKS}/>
        <RightPart>
            <Dropdown
              title={String.fromCodePoint("2400")}
              options={filteredLanguages}
              handleSelect={setSiteLanguage}
            />
            <a href={GIT_LINK} target="_blank" rel="noreferrer">GitHub <ArrowTopRightIcon /></a>
        </RightPart>
      </Content>
    </Wrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  currentLanguage: selectCurrentLanguage,
})

const mapDispatchToProps = dispatch => ({
  setSiteLanguage: language => dispatch(setSiteLanguage(language))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);