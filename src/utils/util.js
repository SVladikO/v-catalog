import translations from "../common.dictionary";

export function currentLanguage() {
    return 'en';
};

export function resolveString(key) {
    return translations[key.substring(1)][currentLanguage()];
}

