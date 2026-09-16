import {
    Wrapper,
    ControlWrapper,
    MainContainer,
    Position,
    CompanyName,
    TimeInterval,
    Responsibility,
    WorkDuration,
    WorkFromTo,
    Skills,
} from './work-place.style';

function Company(props) {
    const {position, company, fromTo, duration, responsibility, skills} = props;

    return (
        <ControlWrapper>
            <Wrapper className='desktop'>
                <div>
                    <WorkFromTo>{fromTo}</WorkFromTo>
                    <WorkDuration>{duration}</WorkDuration>
                </div>
                <div>{company}</div>
                <div>{position}</div>
                <div>{skills}</div>
                <div style={{whiteSpace: 'pre-wrap'}} className='responsibility_desktop'>{responsibility}</div>
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