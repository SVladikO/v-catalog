import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectCurrentLanguage} from "../../redux/config/config.selector";
import {resolveTranslation} from "../../utils/util";

function Text({translationKey, currentLanguage}) {
    return (
        <React.Fragment>
            {
                resolveTranslation(translationKey, currentLanguage)
            }
        </React.Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    currentLanguage: selectCurrentLanguage,
})

export default connect(mapStateToProps)(Text);

