import React from "react";
import {Link} from 'react-router-dom';

import {ROUTE_PATH} from "../../common/route";

import {Wrapper, PageTitle} from '../../components/common.style.js';

function WebsiteCatalog() {
  return (
    <Wrapper>
      <PageTitle>WebsiteCatalog</PageTitle>
      <div><Link to={ROUTE_PATH.SALARY_CALC}>SALARY_CALC</Link></div>
      <div><Link to={ROUTE_PATH.TIME_TABLE_F}>TIME_TABLE_F</Link></div>
    </Wrapper>
  )
}

export default WebsiteCatalog;