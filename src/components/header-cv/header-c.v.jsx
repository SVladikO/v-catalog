import {PositionSubTitle, PositionTitle, WorkplaceTitle} from "./header-cv.styles";
import React from "react";

function HeaderCV() {
    return (
        <React.Fragment>
            <PositionTitle>Middle Front End developer</PositionTitle>
            <PositionSubTitle>Back End 2 years on Java, Front End 3+ years on React, etc.</PositionSubTitle>
            <WorkplaceTitle>Experience:</WorkplaceTitle>
        </React.Fragment>
    )
}

export default HeaderCV;