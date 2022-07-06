import Text from "../text/text.component";

import './introduction.style.scss';

import iconAstound from "../../image/company-logo/astound.png";
import iconBigFishGame from "../../image/company-logo/big-fish-game.png";
import iconItera from "../../image/company-logo/itera.png";
import iconPlaytech from "../../image/company-logo/playtech.png";
import iconKyivSmartCity from "../../image/company-logo/kyiv-smart-city.png";

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

function Introduction() {
  return (
    <div className="introduction">
      <div className="introduction_container">
        <div className="introduction_title"><Text translationKey="$INTRO.TITLE.BRAND_NAME"/></div>
        <div className="introduction_sub_title"><Text translationKey="$INTRO.SUB_TITLE.PURPOSE"/></div>
      </div>
      <div className="experience_container">
        {
          experienceDetails.map(item =>
            <div className="experience_column" key={item.title}>
              <div className="experience_column_title"><Text translationKey={item.title}/></div>
              <div className="experience_column_details"><Text translationKey={item.details}/></div>
            </div>
          )
        }
      </div>
      <div className="introduction_companies">
        {/*company where I worked*/}
        <div className="introduction_companies_title">
          <Text translationKey="$INTRODUCTION.COMPANY.TITLE"/>
        </div>
        <div className="company_icons">
          <img src={iconPlaytech} alt="Playtech"/>
          <img src={iconAstound} alt="Astound commerce"/>
          <img src={iconItera} alt="Itera"/>
          <img src={iconKyivSmartCity} alt="Kyiv Smart City"/>
          <img src={iconBigFishGame} alt="Big fish game"/>
        </div>
      </div>
    </div>

  );
}

export default Introduction;