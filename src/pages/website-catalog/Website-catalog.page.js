import React from "react";
import {Link} from 'react-router-dom';

import {ROUTE_PATH} from "../../common/route";

import {ReactComponent as ArrowRightIcon} from "../../image/arrow-right.svg";

import {Wrapper, PageTitle, CategoryTitle, ItemTitle} from '../../components/common.style.js';

function WebsiteCatalog() {
   const financeLinks = renderLinks([
        {title: "Income calculator", path: ROUTE_PATH.INCOME_CALCULATOR},
   ])

   const englishLinks = renderLinks([
        {title: "English alphabet", path: ROUTE_PATH.ENGLISH_ALPHABET}
   ]);

   const restLinks = renderLinks([
        {title: "Timetable-f", path: ROUTE_PATH.TIME_TABLE_F}
   ]);

   function renderLinks(array) {
       return array.map(
              (f, index) =>
                  <Link to={f.path}>
                    <ItemTitle key={f.title}>
                         {" "}{index + 1}{". "}
                         {f.title}
                         <ArrowRightIcon />
                     </ItemTitle>
                  </Link>
            );
   }

  return (
    <Wrapper>
      <PageTitle>Own projects</PageTitle>

      <CategoryTitle>ENGLISH:</CategoryTitle>
      {englishLinks}

      <CategoryTitle>FINANCES:</CategoryTitle>
      {financeLinks}


      <CategoryTitle>REST:</CategoryTitle>
      {restLinks}
    </Wrapper>
  )
}

export default WebsiteCatalog;