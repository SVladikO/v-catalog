import translations from "../common.dictionary";

export function resolveTranslation(translationKey, currentLanguage = "en") {
    // Prefix "$" added for all translationKey
    // to simplify search through all project later
    const clearKey = translationKey.substring(1);
    const a = translations[clearKey];

    if (!a) {
        console.warn(`Warning! Translation key ${translationKey} = ${a}.`)
        return ""
    }

    return a[currentLanguage];
}

