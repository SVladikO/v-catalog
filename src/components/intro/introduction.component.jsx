import {resolveString} from "../../utils/util";
import './introduction.style.scss';

function Introduction() {
    return (
        <div className="intro-container">
            <div className="intro-title">{resolveString("$INTRO.TITLE.BRAND_NAME")}</div>
            <div className="intro-sub-title">{resolveString("$INTRO.SUB_TITLE.PURPOSE")}</div>
        </div>
    );
}

export default Introduction;