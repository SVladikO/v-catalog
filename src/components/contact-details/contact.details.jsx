import React from "react";

import {ContentContainer, Clipboards, ContactTitle, Location, Name, Avatar} from "./contact-details.style";
import ClipboardItem from "../clipboard/clipboard-item.component";

function ContactDetails() {
  return (
    <ContentContainer>
      <Avatar src="https://avatars.githubusercontent.com/u/10807650?v=4" alt=""/>
      <Name>Vlad Serhiychuk</Name>
      <Location>Ukraine</Location>
      <ContactTitle>Contacts:</ContactTitle>
      <Clipboards>
        <ClipboardItem value={"+380970668830"}/>
        <ClipboardItem value={"vlad.serhiychuk@gmail.com"}/>
      </Clipboards>
    </ContentContainer>
  )
}

export default ContactDetails;
