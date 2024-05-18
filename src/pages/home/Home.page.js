import WorkPlaces from "../../components/work-places/work-places";
import Footer from "../../components/footer/footer.component";

import iconItera from "../../image/company-logo/itera.png";
import iconAstound from "../../image/company-logo/astound.png";
import iconPlaytech from "../../image/company-logo/playtech.png";
import iconBigFishGame from "../../image/company-logo/big-fish-game.png";
import iconKyivSmartCity from "../../image/company-logo/kyiv-smart-city.png";

import presentation1 from "../../image/presentation/1.png";

import {ReactComponent as OnePlusOneLogo} from "../../image/company-logo/1+1.svg";
import Items from "../../components/items/items";

import {
    Wrapper, IntroWrapper, Avatar, IntroductionTitle, IntroductionSubTitle,
    Experience, ExperienceColumn, ColumnTitle, ColumnDetails,
    Companies, CompaniesLogoTitle, LogoWrapper, RowWrapper
} from './Home.style.js';

const YEARS_IN_IT = new Date().getFullYear() - 2015;
const YEARS_AS_BE_DEVELOPER = 2;
const YEARS_AS_FE_DEVELOPER_WITHOUT_REACT = 2;
const YEARS_AS_REACT_DEVELOPER = YEARS_IN_IT - YEARS_AS_BE_DEVELOPER - YEARS_AS_FE_DEVELOPER_WITHOUT_REACT;

const experienceDetails = [
    {
        title: "EXPERIENCE",
        details: `${YEARS_IN_IT}+ years in IT industry. I've taken a part in more than 10 projects with different architecture and complexity.`,
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
            <IntroWrapper>
                <Avatar src="https://avatars.githubusercontent.com/u/10807650?v=4" alt=""/>
                <IntroductionTitle>FRONTEND DEVELOPER</IntroductionTitle>
                <IntroductionSubTitle>9 years in IT * English B2</IntroductionSubTitle>
            </IntroWrapper>
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
                <CompaniesLogoTitle>OWN PROJECTS</CompaniesLogoTitle>
                <Items items={
                    [
                        {title: 'INCOME CALCULATOR', description: 'We will help you to calculate your income in different time.', link: '/income-calculator', src: presentation1},
                        {title: 'ENGLISH ALPHABET TRAINER', description: 'We will help you improve English alphabet spelling. ', link: '/english-alphabet-spelling'},
                        {title: 'CANVAS ANIMATION 1', description: 'Here are I practiced canvas animation.', link: '/canvas_animation_1.html'},
                        {title: 'WALKER', description: 'Beta version of game.', link: '/game/walker/index.html'},
                    ]
                }
                />
            </RowWrapper>
            <RowWrapper>
                <CompaniesLogoTitle>OWN PACKAGES</CompaniesLogoTitle>
                <Items items={
                    [
                        {title: 'timetable-f', description: 'description', link: '/link'},
                        {title: 'react-code-tag', description: 'description', link: '/link'},
                    ]
                }
                />
            </RowWrapper>


            <RowWrapper>
                <CompaniesLogoTitle>WORK EXPERIENCE</CompaniesLogoTitle>
                <WorkPlaces/>
            </RowWrapper>
            <Footer/>
        </Wrapper>

    );
}

export default HomePage;