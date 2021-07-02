import companies from "./data";
import WorkplaceItem from "../workplace-item/workplace-item.component";
import React from "react";

function WorkplaceList() {
    return (
        <React.Fragment>
            {
                companies.map(item =>
                    <WorkplaceItem key={item.company} {...item} />
                )
            }
        </React.Fragment>
    )
}

export default WorkplaceList;
