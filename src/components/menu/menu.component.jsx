import React from "react";

import Text from "../text/text.component";

import './menu.style.scss'

import {Link} from 'react-router-dom';

function Menu({links}) {
    return (
        <div className="menu">
            {
                links.map(
                    (link, index) =>
                        <Link to={link.path} key={index} className="link">
                            <Text translationKey={link.title} />
                        </Link>
                )
            }
        </div>
    );
}

export default Menu;