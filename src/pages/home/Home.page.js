import WorkPlaces from "../../components/work-places/work-places";

import OneSrc from "../../image/company-logo/1+1.png";
import PlaytechSrc from "../../image/company-logo/playtech.png";
import AstoundSrc from "../../image/company-logo/astound.png";
import IteraSrc from "../../image/company-logo/itera.png";
import KSCSrc from "../../image/company-logo/kyiv-smart-city.png";
import BFGIcon from "../../image/company-logo/big-fish-game.png";

import AbstractLineSrc from "../../image/linkes.png"

import presentation1 from "../../image/presentation/1.png";
import presentation2 from "../../image/presentation/2.png";
import presentation3 from "../../image/presentation/3.png";
import presentation4 from "../../image/presentation/4.png";
import presentation5 from "../../image/presentation/5.png";
import presentation6 from "../../image/presentation/6.png";
import projectDepoistuImg from "../../image/presentation/depoistu.png";

import ArrowDownSrc from '../../image/arrow-down.svg'

import Items from "../../components/items/items";

import {
    Wrapper,
    Companies, CompaniesLogoTitle, RowWrapper, ScrollDown, CompaniesWrapper, CompaniesLogoTitle2
} from './Home.style.js';
import Header from "./header/header";
import Main from "./main/main";
import ContactMe from "./contact-me/contact-me";

const projectList = [
    {
        title: 'Instrument chords',
        skills: ['react', 'js'],
        description: 'List of Chords for Guitar, Ukulele, Piano. Select chords and switch between instruments.',
        link: 'https://svladiko.com/external/music-chords/index.html',
        gitLink: 'https://github.com/SVladikO/instrument-chords',
        src: presentation5
    },
    {
        title: 'Depoistu (Closed)',
        skills: ['js', 'react', 'redux', 'Node.js', 'MySql'],
        description: 'Ukraine menu aggregator. 4 people teams. In this project I have lead different roles: FE, BE, UX/UI, team leader, manager, scrum master, DevOps, sales manager.',
        link: 'https://www.youtube.com/watch?v=uId5voBQ5Ls',
        gitLink: 'https://github.com/SVladikO/depoistu',
        src: projectDepoistuImg
    },
    {
        title: 'Walk and shoot',
        skills: ['react', 'js', 'canvas'],
        description: 'Game: You can walk and shoot gangsters.',
        link: 'https://svladiko.com/external/walker/index.html',
        gitLink: 'https://github.com/SVladikO/walk_and_shoot',
        src: presentation4
    },
    {
        title: 'Hunter',
        skills: ['html', 'css', 'js'],
        description: "Game: Three maps, time counter. I took this project for practice porposes.",
        link: 'https://svladiko.com/external/hunting/index.html',
        gitLink: 'https://github.com/SVladikO/hunting-duck',
        src: presentation6
    },
    {
        title: 'Income calculator',
        skills: ['react'],
        description: 'We will help you to calculate your income in different time. It`s always good to know what will be left in the end of the year.',
        link: '/income-calculator',
        gitLink: 'https://github.com/SVladikO/v-catalog/tree/master/src/pages/income-calculator',
        src: presentation1
    },
    // {
    //     title: 'English alphabet',
    //     skills: ['react'],
    //     description: 'We will help you improve English alphabet spelling. ',
    //     link: '/english-alphabet-spelling',
    //     src: presentation2
    // },
    {
        title: 'Canvas animation',
        skills: ['js', 'canvas'],
        description: 'I practiced canvas animation from youtube lesson.',
        link: '/canvas_animation_1.html',
        gitLink: 'https://github.com/SVladikO/v-catalog/blob/master/public/canvas_animation_1.html',
        src: presentation3
    },
];

const packageList = [
    {title: 'timetable-f', skills: [], description: 'description', link: '/link'},
    {title: 'react-code-tag', skills: [], description: 'description', link: '/link'},
]


function HomePage() {
    return (
        <Wrapper>
            <Header/>
            <Main/>
            <ScrollDown href="#OwnProjects">SCROLL DOWN <img src={ArrowDownSrc}/></ScrollDown>
            <RowWrapper id="OwnProjects" className='t-OwnProjects'>
                <img className='own_projects_top_abstract_lines' src={AbstractLineSrc} alt=""/>
                <CompaniesLogoTitle>Own projects</CompaniesLogoTitle>
                <Items items={projectList}/>
            </RowWrapper>
            <RowWrapper id="OwnPackages" className='t-OwnPackages'>
                <img className='own_packages_top_abstract_lines' src={AbstractLineSrc} alt=""/>
                <CompaniesLogoTitle>Own packages</CompaniesLogoTitle>
                <Items items={packageList}/>
            </RowWrapper>

            <div style={{width:'100%', margin:'0 0 20px'}}>
                <CompaniesLogoTitle2>Worked with</CompaniesLogoTitle2>
                <CompaniesWrapper id="CompaniesWorkedWith" className='t-WorkedWith'>
                    <Companies>
                        <img src={OneSrc} alt="1+1"/>
                        <img src={PlaytechSrc} alt="Playtech"/>
                        <img src={AstoundSrc} alt="Astound commerce"/>
                        <img src={IteraSrc} alt="Itera"/>
                        <img src={KSCSrc} alt="Kyiv Smart City"/>
                        <img src={BFGIcon} alt="Big fish game"/>
                    </Companies>
                </CompaniesWrapper>
            </div>

            <RowWrapper  id="WorkExperience" className='t-WorkExperience'>
                <CompaniesLogoTitle>Work experience</CompaniesLogoTitle>
                <WorkPlaces/>
            </RowWrapper>
            <ContactMe />

        </Wrapper>

    );
}

export default HomePage;