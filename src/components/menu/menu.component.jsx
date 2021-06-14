import React from "react";
import './menu.style.scss'

import {resolveString} from '../../utils/util'

function Menu({links}) {
    return (
        <div className="menu">
            {
                links.map(
                    (link, index) =>
                        <div key={index} className="link">
                            {resolveString(link.title)}
                        </div>
                )
            }
        </div>
    );
}

export default Menu;