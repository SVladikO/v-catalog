import {
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
    <MainContainer>
      <CompanyName>{company}</CompanyName>
      <Position>{position}</Position>
      <TimeInterval>
        <span>{`${fromTo} `}</span>
        <span>({duration})</span>
        <span> - Full-time</span>
      </TimeInterval>
      <Skills>({skills})</Skills>
      <Responsibility>
        <SubTitle>Responsibilities:</SubTitle>
        {responsibility}
      </Responsibility>
    </MainContainer>
  )
}

export default Company;