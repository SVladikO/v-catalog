import "./header.styles.scss"
import Menu from "../menu/menu.component";

import {resolveString} from "../../utils/util";

const menu_links = [
    {
        title: "$HEADER.MENU_ITEM.GAME",
        link: ""
    },
    {
        title: "$HEADER.MENU_ITEM.NPM",
        link: ""
    },
    {
        title: "$HEADER.MENU_ITEM.CV",
        link: ""
    },
];

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">{resolveString("$HEADER.LOGO.TEXT")}</div>
                <Menu links={menu_links}/>
                <div>v l</div>
            </div>
        </div>
    )
}

export default Header;