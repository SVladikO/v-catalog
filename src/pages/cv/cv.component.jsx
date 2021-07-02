import React from "react";

import {
    ContentContainer
} from "./cv.component.style";
import WorkplaceList from "../../components/workplace-list/workplace-list.component";
import ContactDetails from "../../components/contact-details/contact.details";
import HeaderCV from "../../components/header-cv/header-c.v";

function CVPage() {
    return (
        <ContentContainer>
            <div>
                <HeaderCV/>
                <WorkplaceList/>
            </div>
            <ContactDetails/>
        </ContentContainer>
    )
}

export default CVPage;