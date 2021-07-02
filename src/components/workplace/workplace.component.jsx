import {
    WorkplaceContainer,
    Position,
    CompanyName,
    TimeInterval,
    Responsibility,
    Location,
    Skills,
    SubTitle,
    CompanyLogo,
} from './workplace.style';

function Workplace(props) {
    const {position, company, logo, fromDate, toDate, duration, city, country, responsibility, skills} = props;

    return (
        <WorkplaceContainer>
            <CompanyLogo src={logo} alt="company logo"/>
            <Position>{position}</Position>
            <CompanyName>{company} * Full-time</CompanyName>
            <TimeInterval>
                <span>{`${fromDate} - ${toDate} `}</span>
                <span>= {duration}</span>
            </TimeInterval>
            <Location>
                <span>{city}</span>
                <span>{`, ${country}`}</span>
            </Location>
            <Responsibility>
                <SubTitle>Responsibilities:</SubTitle>
                {responsibility}</Responsibility>
            <Skills>
                <SubTitle>Skills:</SubTitle>
                {skills}
            </Skills>
        </WorkplaceContainer>
    )
}

export default Workplace;