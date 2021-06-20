import React from "react";

import "./header.styles.scss"
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from "reselect";

import Menu from "../menu/menu.component";
import Text from '../text/text.component';
import Dropdown from "../dropdown/dropdown.component";

import {setSiteLanguage} from '../../redux/config/config.actions'
import {selectCurrentLanguage} from "../../redux/config/config.selector";
import {getLanguages} from "../../common.dictionary";
import {ROUTE_PATH, HEADER_MENU_LINKS} from "../../common/route";

import "./header.styles.scss"



function Header({currentLanguage, setSiteLanguage}) {
    let filteredLanguages = getLanguages().filter(item => item.key != currentLanguage);

    return (
        <div className="header">
            <div className="container">
                <Link className="logo" to={ROUTE_PATH.HOME}><Text translationKey={"$HEADER.LOGO.TEXT"}/></Link>
                <div className="header_menu">
                    <Menu links={HEADER_MENU_LINKS}/>
                </div>
                <Dropdown unicode={"2400"} items={filteredLanguages} action={setSiteLanguage}/>

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentLanguage: selectCurrentLanguage,
})

const mapDispatchToProps = dispatch => ({
    setSiteLanguage: language => dispatch(setSiteLanguage(language))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);