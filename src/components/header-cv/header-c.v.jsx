import {PositionSubTitle, PositionTitle} from "./header-cv.styles";
import React from "react";

function HeaderCV() {
  return (
    <React.Fragment>
      <PositionTitle>Middle Front End developer</PositionTitle>
      <PositionSubTitle>
        Back End 2 years (Java) <br/>
        Front End 5+ years (where React 3+)
      </PositionSubTitle>
    </React.Fragment>
  )
}

export default HeaderCV;