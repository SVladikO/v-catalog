import React from "react";

import {Wrapper, ContentContainer, PositionTitle, About, Salary, ExperienceTitle, ExperienceSubTitle } from "./CV.style";

import ContactDetails from "../../components/contact-details/contact.details";
import WorkplaceItem from "../../components/workplace-item/workplace-item.component";

import {YEARS_IN_IT, YEARS_AS_BE_DEVELOPER, YEARS_AS_FE_DEVELOPER_WITHOUT_REACT} from "../../common.dictionary";

import companies from "./data";

function CVPage() {
  return (
    <Wrapper>
        <ContentContainer>
          <PositionTitle>Frontend developer</PositionTitle>
          <About>Ukraine · Remote</About>
          <ExperienceTitle>Experience:</ExperienceTitle>
          <ExperienceSubTitle>{YEARS_IN_IT} years in IT · English Upper-Intermediate</ExperienceSubTitle>
          {companies.map(item => <WorkplaceItem key={item.company} {...item} />)}
        </ContentContainer>
        <ContactDetails/>
    </Wrapper>

  )
}

export default CVPage;