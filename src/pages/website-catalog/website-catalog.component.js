import React from "react";
import {Link} from 'react-router-dom';

import {ROUTE_PATH} from "../../common/route";

import {Wrapper, PageTitle, ItemTitle} from '../../components/common.style.js';

function WebsiteCatalog() {
  return (
    <Wrapper>
      <PageTitle>WebsiteCatalog</PageTitle>
      <ItemTitle><Link to={ROUTE_PATH.SALARY_CALC}>Salary calculator</Link></ItemTitle>
      <ItemTitle><Link to={ROUTE_PATH.TIME_TABLE_F}>Timetable-f </Link></ItemTitle>
    </Wrapper>
  )
}

export default WebsiteCatalog;