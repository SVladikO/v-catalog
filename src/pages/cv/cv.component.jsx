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

const companies = [
    {
        position: "Software Engineer",
        company: "Playtech",
        logo: 'https://media-exp3.licdn.com/dms/image/C4E0BAQHqvkMeKgi1Ng/company-logo_100_100/0/1519856461325?e=1633564800&v=beta&t=VJwl6G5av6iRf_fLf4a0dGFkSINqJsLFvcfzwXeXfAU',
        fromDate: "Aug 2019",
        toDate: "Apr 2021",
        duration: "1 yr 9 mos",
        city: "Kiev Region",
        country: "Ukraine",
        responsibility: "I've worked on client side (configuration, branding, support, upgrade, bugfix).",
        skills: "JS, React, Node.js, HTML, CSS",
    },
    {
        position: "Frontend developer",
        company: "Astound Commerce",
        logo: 'https://media-exp3.licdn.com/dms/image/C4D0BAQGmdlVsd9YECw/company-logo_100_100/0/1519884416952?e=1633564800&v=beta&t=mjBnwLHmWJLawamtNV27MC736z4P8SLPB56oY87ITAc',
        fromDate: "Sep 2018",
        toDate: "Jun 2019",
        duration: "10 mos",
        city: "Kiev Region",
        country: "Ukraine",
        responsibility: "I’ve taken a part in develop two e-commerce projects(bugfix, brought new functionality).",
        skills: "JS, GitLab, Node.js, NPM, Jira",
    },
    {
        position: "Full-stack Developer",
        company: "Itera",
        logo: 'https://media-exp3.licdn.com/dms/image/C4E0BAQGhJSJxp8Zgxg/company-logo_100_100/0/1614844308837?e=1633564800&v=beta&t=uFD-CSUncr7iJoV5ShZZvmCsKd3n1qcg8wb-NEYRT-w',
        fromDate: "Sep 2017",
        toDate: "Jun 2018",
        duration: "10 mos",
        city: "Kiev Region",
        country: "Ukraine",
        responsibility: "I’ve taken a part in developing server & client side for Íslandsbanki (bugfix, tests, brought new functionality).",
        skills: "JS, Java 8, Angular.js, Node.js, Spring, Camel, REST, JSON, SoapUI, JUnit, HTML, CSS, bakckbase, BackbaseAndroid Studio, IntelliJ IDEA"
    },
    {
        position: "Full-stack Developer",
        company: "Kyiv Smart City",
        logo: 'https://media-exp3.licdn.com/dms/image/C510BAQFaBqS15ziE2w/company-logo_100_100/0/1519872146772?e=1633564800&v=beta&t=adAGVu5I5YTU3KnHK51oM32ZL5-ZhVdfuxzrvip8e54',
        fromDate: "Jun 2016",
        toDate: "Jyl 2017",
        duration: "1 yr 1 mos",
        city: "Kiev Region",
        country: "Ukraine",
        responsibility: "I've taken a part in develop iGov and pdf editor online (bugfix, brought new functionality).",
        skills: "JS, Java, Node.js, Angular JS 1.5, Git, Jira, React, Redux, JQuery, JSON, HTML, CSS, Bootstrap",
    },
    {
        position: "Java developer",
        company: "Big Fish Game",
        logo: 'https://media-exp3.licdn.com/dms/image/C4D0BAQH79I__w0N_-A/company-logo_100_100/0/1625117051757?e=1633564800&v=beta&t=AGRElhdiCHDslBx25qrE1Yt9A3Fn4FGdiA1DOjA1s3E',
        fromDate: "May 2015",
        toDate: "Jun 2016",
        duration: "1 yr 2 mos",
        city: "Kiev Region",
        country: "Ukraine",
        responsibility: "I've taken a part in develop product that worked with Facebook API (bugfix, tests, brought new functionality)",
        skills: "Java, Spring MVC, MySql, PostgreSQL, Mongo, ActiveJdbc, Hibernate 4, REST, Jersey",
    }
]

function CVPage() {
    return (
        <ContentContainer>
            <div>
                <PositionTitle>Front-end developer</PositionTitle>
                <PositionSubTitle>Back-end 2 years on Java, Front-end 3 years on React, etc.</PositionSubTitle>
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