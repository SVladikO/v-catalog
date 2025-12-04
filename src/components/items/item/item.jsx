import {
    Wrapper,
    Img,
    Title,
    Description,
    Left,
    Right,
    Skills,
    Skill,
    PrimaryLink,
    SecondaryLink,
    LinkWrapper
} from './item.style.js';

import ArrowSrc from '../../../image/arrow.svg'

export default function Item(props) {
    const {title, skills, description, link, gitLink, src} = props.item;

    return (
        <Wrapper>
            <Left>
                <Title>{title}</Title>
                <Skills>{skills.map(skill => <Skill>{skill}</Skill>)}</Skills>
                <Description>{description}</Description>
            </Left>
            <Right>
                <Img src={src}/>
                <LinkWrapper>
                    <PrimaryLink href={gitLink} target="_blank">Github</PrimaryLink>
                    <SecondaryLink href={link} target="_blank">Check result <img src={ArrowSrc}/> </SecondaryLink>
                </LinkWrapper>

            </Right>
        </Wrapper>
    )
}