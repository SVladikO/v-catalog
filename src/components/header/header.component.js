import React from "react";

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from "reselect";

import {Wrapper, Content} from './Header.style.js';

import Menu from "../menu/menu.component";
import Text from '../text/text.component';
import Dropdown from "../dropdown/dropdown.component";

import {getLanguages} from "../../common.dictionary";
import {setSiteLanguage} from '../../redux/config/config.actions'
import {selectCurrentLanguage} from "../../redux/config/config.selector";
import {ROUTE_PATH, HEADER_MENU_LINKS} from "../../common/route";

function Header({currentLanguage, setSiteLanguage}) {
  let filteredLanguages = getLanguages().filter(item => item.key !== currentLanguage);

  return (
    <Wrapper>
      <Content>
        <Link to={ROUTE_PATH.HOME}><Text translationKey={"$HEADER.LOGO.TEXT"}/></Link>
        <Menu links={HEADER_MENU_LINKS}/>
        <Dropdown unicode={"2400"} items={filteredLanguages} action={setSiteLanguage}/>
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