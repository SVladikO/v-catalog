import {ContentContainer, Clipboards, ContactTitle, Location, Name} from "./contact-details.style";
import React from "react";
import ClipboardItem from "../clipboard/clipboard-item.component";

function ContactDetails() {
  return (
    <ContentContainer>
      <Name>Vlad Serhiychuk</Name>
      <Location>Ukraine</Location>
      <ContactTitle>Contact:</ContactTitle>
      <Clipboards>
        <ClipboardItem value={"+380970668830"}/>
        <ClipboardItem value={"vlad.serhiychuk@gmail.com"}/>
        Skype:
        <ClipboardItem value={"vlad.serhiychuk"}/>
      </Clipboards>
    </ContentContainer>
  )
}

export default ContactDetails;
