import WorkPlaces from "../../components/work-places/work-places";
import Footer from "../../components/footer/footer.component";

import iconItera from "../../image/company-logo/itera.png";
import iconAstound from "../../image/company-logo/astound.png";
import iconPlaytech from "../../image/company-logo/playtech.png";
import iconBigFishGame from "../../image/company-logo/big-fish-game.png";
import iconKyivSmartCity from "../../image/company-logo/kyiv-smart-city.png";

import presentation1 from "../../image/presentation/1.png";
import presentation2 from "../../image/presentation/2.png";
import presentation3 from "../../image/presentation/3.png";
import presentation4 from "../../image/presentation/4.png";
import presentation5 from "../../image/presentation/5.png";
import presentation6 from "../../image/presentation/6.png";
import projectDepoistuImg from "../../image/presentation/depoistu.png";

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
                        {
                            title: 'INSTRUMENT CHORDS',
                            skills: ['react', 'js'],
                            description: 'Guitar, ukulele, piano chords. Sometimes each of us want to play new songs on different instruments. For situation when you met new chords I created this website. Select chords and switch between instruments.',
                            link: 'https://svladiko.com/external/music-chords/index.html',
                            src: presentation5
                        },
                        {
                            title: 'WALK AND SHOOT',
                            skills: ['react', 'js', 'canvas'],
                            description: 'Game where you can walk and shoot gangsters. I have decided to play games but for don`t feel guilty of wasting time it should be my games. That`s how this game was created.',
                            link: 'https://svladiko.com/external/walker/index.html',
                            src: presentation4
                        },
                        {
                            title: 'Depoistu (Closed)',
                            skills: ['js', 'react', 'redux', 'Node.js', 'MySql'],
                            description: 'Ukraine menu aggregator. We have tried to standardise and collect all menu of Ukraine in one place. \n We have organised team from people who only started their IT path. Intern FE, intern QA, intern UI/UX. In this project I have lead different roles: FE, BE, UX/UI, team leader, manager, scrum master, DevOps, sales manager. Each of us have got an amazing experience. We have closed this project after 1y 6m because of War in Ukraine.',
                            link: 'https://www.youtube.com/watch?v=uId5voBQ5Ls',
                            src: projectDepoistuImg
                        },
                        {
                            title: 'HUNTER',
                            skills: ['html, css, js'],
                            description: "Three maps, time counter. I took this project for practice porposes.",
                            link: 'https://svladiko.com/external/hunting/index.html',
                            src: presentation6
                        },
                        {
                            title: 'INCOME CALCULATOR',
                            skills: ['react'],
                            description: 'We will help you to calculate your income in different time. It`s always good to know what will be left in the end of the year.',
                            link: '/income-calculator',
                            src: presentation1
                        },
                        {
                            title: 'ENGLISH ALPHABET TRAINER',
                            skills: ['react'],
                            description: 'We will help you improve English alphabet spelling. ',
                            link: '/english-alphabet-spelling',
                            src: presentation2
                        },
                        {
                            title: 'CANVAS ANIMATION 1',
                            skills: ['js', 'canvas'],
                            description: 'Here are I practiced canvas animation from youtube lesson.',
                            link: '/canvas_animation_1.html',
                            src: presentation3
                        },
                    ]
                }
                />
            </RowWrapper>
            <RowWrapper>
                <CompaniesLogoTitle>OWN PACKAGES</CompaniesLogoTitle>
                <Items items={
                    [
                        {title: 'timetable-f', skills: [], description: 'description', link: '/link'},
                        {title: 'react-code-tag', skills: [], description: 'description', link: '/link'},
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