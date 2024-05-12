import {Wrapper, Title, Description} from './pet-project-intro.style';

export default function PetProjectIntro({title, description}) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Wrapper>
    )
}