import React from "react";

import {
    ContentContainer
} from "./cv.component.style";
import WorkplaceList from "../../components/workplace-list/workplace-list.component";
import ContactDetailsComponent from "../../components/contact-details/contact-details.component";
import HeaderCV from "../../components/header-cv/header-c.v";

function CVPage() {
    return (
        <ContentContainer>
            <div>
                <HeaderCV/>
                <WorkplaceList/>
            </div>
            <ContactDetailsComponent/>
        </ContentContainer>
    )
}

export default CVPage;