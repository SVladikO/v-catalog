import Text from "../../components/text/text.component";

import iconAstound from "../../image/company-logo/astound.png";
import iconBigFishGame from "../../image/company-logo/big-fish-game.png";
import iconItera from "../../image/company-logo/itera.png";
import iconPlaytech from "../../image/company-logo/playtech.png";
import iconKyivSmartCity from "../../image/company-logo/kyiv-smart-city.png";

import {ReactComponent as OnePlusOneLogo} from "../../image/company-logo/1+1.svg";

import {Wrapper, Container, IntroductionTitle, IntroductionSubTitle,
 Experience, ExperienceColumn, ColumnTitle,  ColumnDetails,
 Companies, CompaniesLogoTitle, LogoWrapper
 } from './home.style.js';

const experienceDetails = [
  {
    title: "$INTRODUCTION.EXPERIENCE.TITLE",
    details: "$INTRODUCTION.EXPERIENCE.DETAILS",
  },
  {
    title: "$INTRODUCTION.TECHNOLOGY.TITLE",
    details: "$INTRODUCTION.TECHNOLOGY.DETAILS",
  },
  {
    title: "$INTRODUCTION.POSITION.TITLE",
    details: "$INTRODUCTION.POSITION.DETAILS",
  },
];

function HomePage() {
  return (
    <Wrapper>
      <Container>
        <IntroductionTitle><Text translationKey="$INTRO.TITLE.BRAND_NAME"/></IntroductionTitle>
        <IntroductionSubTitle><Text translationKey="$INTRO.SUB_TITLE.PURPOSE"/></IntroductionSubTitle>
      </Container>
      <Experience>
        {
          experienceDetails.map(item =>
            <ExperienceColumn key={item.title}>
              <ColumnTitle>
                <Text translationKey={item.title}/>
              </ColumnTitle>
              <ColumnDetails><Text translationKey={item.details}/></ColumnDetails>
            </ExperienceColumn>
          )
        }
      </Experience>
      <Companies>
        <CompaniesLogoTitle>
          <Text translationKey="$INTRODUCTION.TITLE"/>
        </CompaniesLogoTitle>
        <LogoWrapper>
          <OnePlusOneLogo/>
          <img src={iconPlaytech} alt="Playtech"/>
          <img src={iconAstound} alt="Astound commerce"/>
          <img src={iconItera} alt="Itera"/>
          <img src={iconKyivSmartCity} alt="Kyiv Smart City"/>
          <img src={iconBigFishGame} alt="Big fish game"/>
        </LogoWrapper>
      </Companies>
    </Wrapper>

  );
}

export default HomePage;