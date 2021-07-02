import {ContactDetails, ContactTitle, Email, Location, Name, Phone, Skype} from "./contact-details.style";
import React from "react";

function ContactDetailsComponent () {
    return (
        <ContactDetails>
            <Name>Vlad Serhiychuk</Name>
            <Location>Ukraine</Location>
            <ContactTitle>Contact:</ContactTitle>
            <Phone>+38 (097) 066 88 30</Phone>
            <Email>vlad.serhiychuk@gmail.com</Email>
            <Skype>skype: vlad.serhiychuk</Skype>
        </ContactDetails>
    )
}

export default ContactDetailsComponent;
