import React from "react";

export default function Text({translationKey}) {
  return (
    <React.Fragment>
      {translationKey}
      {/*{resolveTranslation(translationKey, currentLanguage)}*/}
    </React.Fragment>
  )
}