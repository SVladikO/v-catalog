import React from "react";
import {resolveString} from '../../utils/util'

import './menu.style.scss'

import {Link} from 'react-router-dom';

function Menu({links}) {
    return (
        <div className="menu">
            {
                links.map(
                    (link, index) =>
                        <Link to={link.path} key={index} className="link">
                            {resolveString(link.title)}
                        </Link>
                )
            }
        </div>
    );
}

export default Menu;