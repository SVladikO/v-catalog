import React from "react";

import {
    ContentContainer
} from "./cv.component.style";
import WorkplaceList from "../../components/workplace-list/workplace-list.component";
import ContactDetails from "../../components/contact-details/contact.details";
import HeaderCvComponent from "../../components/header-cv/header-cv.component";

function CVPage() {
    return (
        <ContentContainer>
            <div>
                <HeaderCvComponent/>
                <WorkplaceList/>
            </div>
            <ContactDetails/>
        </ContentContainer>
    )
}

export default CVPage;