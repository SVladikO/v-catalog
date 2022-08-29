import React from "react";
import {Link} from 'react-router-dom';

import {ROUTE_PATH} from "../../common/route";

import {ReactComponent as ArrowRightIcon} from "../../image/arrow-right.svg";

import {Wrapper, PageTitle, CategoryTitle, ItemTitle} from '../../components/common.style.js';

function WebsiteCatalog() {
   const financeLinks = renderLinks([
        {title: "Time calculator", path: ROUTE_PATH.INCOME_CALCULATOR},
   ])

   const englishLinks = renderLinks([
        {title: "English alphabet", path: ROUTE_PATH.ENGLISH_ALPHABET}
   ]);

   const restLinks = renderLinks([
        {title: "Timetable-f", path: ROUTE_PATH.TIME_TABLE_F},
        {title: "Canvas animation dots", path: ROUTE_PATH.CANVAS_ANIMATION_DOTS},
   ]);

   function renderLinks(array) {
       return array.map(
          (f, index) =>
              <Link to={f.path} key={f.title} target="_blank" rel="noreferrer">
                  <ItemTitle>
                      {" "}{index + 1}{". "}
                      {f.title}
                      <ArrowRightIcon />
                  </ItemTitle>
              </Link>
          );
   }

  return (
    <Wrapper>
      <PageTitle>Web projects</PageTitle>

      <CategoryTitle>ENGLISH:</CategoryTitle>
      {englishLinks}

      <CategoryTitle>FINANCES:</CategoryTitle>
      {financeLinks}


      <CategoryTitle>OTHER:</CategoryTitle>
      {restLinks}
    </Wrapper>
  )
}

export default WebsiteCatalog;