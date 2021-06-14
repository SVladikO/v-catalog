import translations from "../common.dictionary";

export function setSiteLanguage(language) {
    localStorage.setItem("language", language);
}

export function currentLanguage() {
    const language = localStorage.getItem("language");
    return language || 'en';
};

export function resolveString(key) {
    return translations[key.substring(1)][currentLanguage()];
}

