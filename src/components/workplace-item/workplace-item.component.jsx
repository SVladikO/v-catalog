import {
  MainContainer,
  Position,
  CompanyName,
  TimeInterval,
  Responsibility,
  Location,
  Skills,
  SubTitle,
  CompanyLogo,
} from './workplace-item.style';

function WorkplaceItem(props) {
  const {position, company, logo, fromDate, toDate, duration, city, country, responsibility, skills} = props;

  return (
    <MainContainer>
      <CompanyLogo src={logo} alt="company logo"/>
      <Position>{position}</Position>
      <CompanyName>{company} - Full-time</CompanyName>
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
        {responsibility}
      </Responsibility>
      <Skills>
        <SubTitle>Skills:</SubTitle>
        {skills}
      </Skills>
    </MainContainer>
  )
}

export default WorkplaceItem;