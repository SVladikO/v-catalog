import {Wrapper, Title, Email, Contacts, AbstractImg, Made, Developed, Dev, DevLabel, DevContact} from "./contact-me.style.js";
import LinkedinIcon from "../../../image/linkedin.svg";
import TelegramIcon from "../../../image/telegram.svg";
import GithubIcon from "../../../image/github.svg";
import {BgWrapper} from "./contact-me.style";
import AbstractLineSrc from "../../../image/linkes.png";

const ContactMe = () => {
    return (
        <BgWrapper id="ContactMe">
            <AbstractImg src={AbstractLineSrc} alt=""/>
            <Wrapper>
                <Title>Contact Me by</Title>
                <Email>vlad.serhiychuk@gmail.com</Email>

                <Contacts>
                    <a href='https://www.linkedin.com/in/vlad-serhiychuk-b753b7188/' target="_blank"><img
                        src={LinkedinIcon}/></a>
                    <a href='https://t.me/svladiko' target="_blank"><img src={TelegramIcon}/></a>
                    <a href='https://github.com/SVladikO' target="_blank"><img src={GithubIcon}/></a>
                </Contacts>
                <Developed>
                    <Dev>
                        <DevLabel>Developed</DevLabel>
                        <DevContact>svladiko.com</DevContact>
                    </Dev>
                    <Dev>
                        <DevLabel>Design</DevLabel>
                        <DevContact>myroniuk.com</DevContact>
                    </Dev>
                </Developed>
                <Made>Made in Ukraine 2023 🇺🇦</Made>
            </Wrapper>
        </BgWrapper>
    )
}

export default ContactMe;