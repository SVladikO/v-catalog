import translations from "../common.dictionary";

export function resolveTranslation(key, currentLanguage) {
    return translations[key.substring(1)][currentLanguage];
}
export function resolveString(key) {
    let currentLanguage = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).config).currentLanguage;
    return translations[key.substring(1)][currentLanguage];
}

