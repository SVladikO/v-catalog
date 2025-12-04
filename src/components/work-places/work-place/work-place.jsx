import {
    Wrapper,
    ControlWrapper,
    MainContainer,
    Position,
    CompanyName,
    TimeInterval,
    Responsibility,
    Location,
    Skills,
    SubTitle,
} from './work-place.style';

function Company(props) {
    const {position, company, fromTo, duration, responsibility, skills} = props;

    return (
        <ControlWrapper>
            <Wrapper className='desktop'>
                <div>
                    <div>${fromTo}</div>
                    <div>{duration}</div>
                </div>
                <div>{company}</div>
                <div>{position}</div>
                <div>{skills}</div>
                <div>{responsibility}</div>
            </Wrapper>
            <MainContainer className='mobile'>
                <Position>{position}</Position>
                <CompanyName>{company}</CompanyName>
                <div>
                    <TimeInterval>{fromTo} - Full time</TimeInterval>
                    <TimeInterval>{duration}</TimeInterval>
                </div>

                <Skills>{skills}</Skills>
                <Responsibility>
                    {responsibility}
                </Responsibility>
            </MainContainer>
        </ControlWrapper>
    )
}

export default Company;