import {
  MainContainer,
  Position,
  CompanyName,
  TimeInterval,
  Responsibility,
  Location,
  Skills,
  SubTitle,
} from './workplace-item.style';

function WorkplaceItem(props) {
  const {position, company, fromTo, duration, city, country, responsibility, skills} = props;

  return (
    <MainContainer>
      <CompanyName>{company}</CompanyName>
      <Position>{position}</Position>
      <TimeInterval>
        <span>{`${fromTo} `}</span>
        <span>({duration})</span>
        <span> - Full-time</span>
      </TimeInterval>
{/*       <Location> */}
{/*         <span>{city}</span> */}
{/*         <span>{`, ${country}`}</span> */}
{/*       </Location> */}
      <Skills>({skills})</Skills>
      <Responsibility>
        <SubTitle>Responsibilities:</SubTitle>
        {responsibility}
      </Responsibility>
    </MainContainer>
  )
}

export default WorkplaceItem;