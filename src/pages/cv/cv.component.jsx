import React from "react";

import Workplace from '../../components/workplace/workplace.component';
import {
    ContentContainer, WorkplaceTitle,
    ContactDetails,
    Location,
    Email,
    Name,
    Phone,
    PositionTitle,
    ContactTitle,
    Skype,
    PositionSubTitle
} from "./cv.component.style";
import companies from './data';

function CVPage() {
    return (
        <ContentContainer>
            <div>
                <PositionTitle>Middle Front End developer</PositionTitle>
                <PositionSubTitle>Back End 2 years on Java, Front End 3+ years on React, etc.</PositionSubTitle>
                <WorkplaceTitle>Experience:</WorkplaceTitle>
                {
                    companies.map(item =>
                        <Workplace key={item.company} {...item} />
                    )
                }
            </div>
            <ContactDetails>
                <Name>Vlad Serhiychuk</Name>
                <Location>Ukraine</Location>
                <ContactTitle>Contact:</ContactTitle>
                <Phone>+38 (097) 066 88 30</Phone>
                <Email>vlad.serhiychuk@gmail.com</Email>
                <Skype>skype: vlad.serhiychuk</Skype>
            </ContactDetails>
        </ContentContainer>
    )
}

export default CVPage;