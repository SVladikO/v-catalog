import {ContentContainer, ContactTitle, Email, Location, Name, Phone, Skype} from "./contact-details.style";
import React from "react";

function ContactDetails () {
    return (
        <ContentContainer>
            <Name>Vlad Serhiychuk</Name>
            <Location>Ukraine</Location>
            <ContactTitle>Contact:</ContactTitle>
            <Phone>+38 (097) 066 88 30</Phone>
            <Email>vlad.serhiychuk@gmail.com</Email>
            <Skype>skype: vlad.serhiychuk</Skype>
        </ContentContainer>
    )
}

export default ContactDetails;
