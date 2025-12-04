import {
    Wrapper,
    Position,
    PIB,
    ImgBg,
    Content,
    ExtraContentWrapper,
    ExtraContent,
    ExtraContentHeader,
    ExtraContentBody,
    Contacts
} from "./main.style";
import MainBg from '../../../image/main-bg.png'

import LinkedinIcon from '../../../image/linkedin.svg';
import TelegramIcon from '../../../image/telegram.svg'
import GithubIcon from '../../../image/github.svg'

const YEARS_IN_IT = new Date().getFullYear() - 2015;

const Main = () => {
    return (
        <Wrapper id="AboutMe" className='t-Intro'>
            <ImgBg src={MainBg} alt=""/>
            <Content>
                <Position>FRONTEND DEVELOPER</Position>
                <PIB>Vladyslav</PIB>
                <PIB>Serhiichuk</PIB>
            </Content>
            <Contacts>
                <a href='https://www.linkedin.com/in/vlad-serhiychuk-b753b7188/' target="_blank"><img
                    src={LinkedinIcon}/></a>
                <a href='https://t.me/svladiko' target="_blank"><img src={TelegramIcon}/></a>
                <a href='https://github.com/SVladikO' target="_blank"><img src={GithubIcon}/></a>
            </Contacts>
            <ExtraContentWrapper>
                <ExtraContent>
                    <ExtraContentHeader>{YEARS_IN_IT} +</ExtraContentHeader>
                    <ExtraContentBody>years of experience</ExtraContentBody>
                </ExtraContent>
                <ExtraContent>
                    <ExtraContentHeader>6 +</ExtraContentHeader>
                    <ExtraContentBody>own projects</ExtraContentBody>
                </ExtraContent>
                <ExtraContent>
                    <ExtraContentHeader>B2</ExtraContentHeader>
                    <ExtraContentBody>English level</ExtraContentBody>
                </ExtraContent>
            </ExtraContentWrapper>
        </Wrapper>
    )
}

export default Main;