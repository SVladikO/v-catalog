import React from "react";
import "./header.styles.scss"
import Menu from "../menu/menu.component";

import {Link} from 'react-router-dom';

import {getLanguages} from "../../common.dictionary";
import {resolveString, setSiteLanguage} from "../../utils/util";
import Dropdown from "../dropdown/dropdown.component";

export const ROUTE_PATH = {
    HOME: '/',
    GAMES: "/games",
    PACKAGES: "/packages",
    CV: "/cv"
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

function Header() {
    return (
        <div className="header">
            <div className="container">
                <Link className="logo" to={ROUTE_PATH.HOME}>{resolveString("$HEADER.LOGO.TEXT")}</Link>
                <Menu links={menu_links}/>
                <Dropdown unicode={"2400"} items={getLanguages()} func={(value) => { setSiteLanguage(value); document.location.reload();}} />
            </div>
        </div>
    )
}

export default Header;