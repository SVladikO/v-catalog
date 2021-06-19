import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setSiteLanguage} from '../../redux/config/config.actions'

import Menu from "../menu/menu.component";
import Text from "../text/text.component";
import Dropdown from "../dropdown/dropdown.component";

import {getLanguages} from "../../common.dictionary";

import "./header.styles.scss"

export const ROUTE_PATH = {
    HOME: '/v-market',
    GAMES: "/v-market/games",
    PACKAGES: "/v-market/packages",
    CV: "/v-market/cv"
}

const menu_links = [
    {
        title: "$HEADER.MENU_ITEM.GAME",
        path: ROUTE_PATH.GAMES
    },
    {
        title: "$HEADER.MENU_ITEM.NPM",
        path: ROUTE_PATH.PACKAGES
    },
    {
        title: "$HEADER.MENU_ITEM.CV",
        path: ROUTE_PATH.CV
    },
];

function Header({setSiteLanguage}) {
    return (
        <div className="header">
            <div className="container">
                <Link className="logo" to={ROUTE_PATH.HOME}><Text translationKey={"$HEADER.LOGO.TEXT"}/></Link>
                <Menu links={menu_links}/>
                <Dropdown unicode={"2400"} items={getLanguages()} action={setSiteLanguage} />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setSiteLanguage: language => dispatch(setSiteLanguage(language))
})

export default connect(null, mapDispatchToProps)(Header);