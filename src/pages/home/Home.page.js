import Text from "../../components/text/text.component";
import WorkPlaces from "../../components/work-places";

import iconItera from "../../image/company-logo/itera.png";
import iconAstound from "../../image/company-logo/astound.png";
import iconPlaytech from "../../image/company-logo/playtech.png";
import iconBigFishGame from "../../image/company-logo/big-fish-game.png";
import iconKyivSmartCity from "../../image/company-logo/kyiv-smart-city.png";

import {ReactComponent as OnePlusOneLogo} from "../../image/company-logo/1+1.svg";

import {
    Wrapper, Container, Avatar, IntroductionTitle, IntroductionSubTitle,
    Experience, ExperienceColumn, ColumnTitle, ColumnDetails,
    Companies, CompaniesLogoTitle, LogoWrapper, RowWrapper
} from './Home.style.js';
import {YEARS_AS_BE_DEVELOPER, YEARS_AS_REACT_DEVELOPER, YEARS_IN_IT} from "../../common.dictionary";
import Index from "../../components/work-places";

const experienceDetails = [
    {
        title: "EXPERIENCE",
        details: `${YEARS_IN_IT}+ years in IT industry. Took a part in 10 project with different architecture and complexity.`,
    },
    {
        title: "TECHNOLOGIES",
        details: "JS, React, Redux, HTML/CSS, Java, Angular, Node.js, MySQL",
    },
    {
        title: "POSITIONS",
        details: `Backend Java (${YEARS_AS_BE_DEVELOPER} years) Frontend ${YEARS_IN_IT - YEARS_AS_BE_DEVELOPER}+ years (where React ${YEARS_AS_REACT_DEVELOPER}+)`,
    },
];

function HomePage() {
    return (
        <Wrapper>
            <Container>
                <Avatar src="https://avatars.githubusercontent.com/u/10807650?v=4" alt=""/>
                <IntroductionTitle><Text>svladiko</Text></IntroductionTitle>
                <IntroductionSubTitle><Text>Pet projects of Vlad Serhiychuk</Text></IntroductionSubTitle>
            </Container>
            <Experience>
                {
                    experienceDetails.map(item =>
                        <ExperienceColumn key={item.title}>
                            <ColumnTitle>{item.title}</ColumnTitle>
                            <ColumnDetails>{item.details}</ColumnDetails>
                        </ExperienceColumn>
                    )
                }
            </Experience>
            <RowWrapper>
                <Companies>
                    <CompaniesLogoTitle>WORKED WITH</CompaniesLogoTitle>
                    <LogoWrapper>
                        <OnePlusOneLogo/>
                        <img src={iconPlaytech} alt="Playtech"/>
                        <img src={iconAstound} alt="Astound commerce"/>
                        <img src={iconItera} alt="Itera"/>
                        <img src={iconKyivSmartCity} alt="Kyiv Smart City"/>
                        <img src={iconBigFishGame} alt="Big fish game"/>
                    </LogoWrapper>
                </Companies>
            </RowWrapper>
            <RowWrapper>
                <CompaniesLogoTitle>OWN PACKAGES</CompaniesLogoTitle>
            </RowWrapper>
            <RowWrapper>
                <CompaniesLogoTitle>OWN PROJECTS</CompaniesLogoTitle>
            </RowWrapper>
            <RowWrapper>
                <CompaniesLogoTitle>WORK EXPERIENCE</CompaniesLogoTitle>
                <WorkPlaces />
            </RowWrapper>
        </Wrapper>

    );
}

export default HomePage;