import translations from "../common.dictionary";

export function resolveTranslation(key, currentLanguage) {
    return translations[key.substring(1)][currentLanguage];
}

