import Text from "../text/text.component";

import './introduction.style.scss';

function Introduction() {
    return (
        <div className="intro-container">
            <div className="intro-title"><Text translationKey="$INTRO.TITLE.BRAND_NAME" /></div>
            <div className="intro-sub-title"><Text translationKey="$INTRO.SUB_TITLE.PURPOSE" /></div>
        </div>
    );
}

export default Introduction;