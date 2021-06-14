import {resolveString} from "../../utils/util";

function Intro() {
    return (
        <div>
            <div>{resolveString("$INTRO.TITLE.BRAND_NAME")}</div>
            <div>{resolveString("$INTRO.SUB_TITLE.PURPOSE")}</div>
        </div>

    // "INTRO.TITLE.BRAND_NAME": {
    //     "en": "V-Market",
    //         "ua": "Resume"
    // },
    // "INTRO.SUB_TITLE.PURPOSE": {
    //     "en": "One place for all pet projects",
    //         "ua": "Resume"
    // },
    )
}

export default Intro;