import Text from "../text/text.component";

import './introduction.style.scss';


let experienceDetails = [
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
]


function Introduction() {
    return (
        <div>
            <div className="introduction_container">
                <div className="introduction_title"><Text translationKey="$INTRO.TITLE.BRAND_NAME"/></div>
                <div className="introduction_sub_title"><Text translationKey="$INTRO.SUB_TITLE.PURPOSE"/></div>
            </div>
            <div className="experience_container">
                {
                    experienceDetails.map(item =>
                        <div className="experience_column" key={item.title}>
                            <div className="experience_column_title"><Text translationKey={item.title} /></div>
                            <div className="experience_column_details"><Text translationKey={item.details} /></div>
                        </div>
                    )
                }
            </div>
        </div>

    );
}

export default Introduction;