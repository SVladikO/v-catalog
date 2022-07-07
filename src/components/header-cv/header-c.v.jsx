import {PositionSubTitle, PositionTitle} from "./header-cv.styles";
import React from "react";
import {YEARS_IN_IT, YEARS_AS_BE_DEVELOPER, YEARS_AS_FE_DEVELOPER_WITHOUT_REACT} from "../../common.dictionary";

function HeaderCV() {
  return (
    <React.Fragment>
      <PositionTitle>Senior Front End developer</PositionTitle>
      <PositionSubTitle>
        Back End {YEARS_AS_BE_DEVELOPER} years (Java) <br/>
        Front End {YEARS_IN_IT-YEARS_AS_BE_DEVELOPER}+ years (where React {YEARS_IN_IT-YEARS_AS_BE_DEVELOPER-YEARS_AS_FE_DEVELOPER_WITHOUT_REACT}+)
      </PositionSubTitle>
    </React.Fragment>
  )
}

export default HeaderCV;