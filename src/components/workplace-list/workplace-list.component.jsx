import React from "react";

import companies from "./data";
import WorkplaceItem from "../workplace-item/workplace-item.component";
import {WorkplaceTitle} from "./workplace-list.styles";

function WorkplaceList() {
    return (
        <React.Fragment>
            <WorkplaceTitle>Experience:</WorkplaceTitle>
            {
                companies.map(item =>
                    <WorkplaceItem key={item.company} {...item} />
                )
            }
        </React.Fragment>
    )
}

export default WorkplaceList;
