const translations = {
    "HEADER.LOGO.TEXT": {
        "en": "V-Market",
        "ru": "V-Market",
        "ua": "V-Market"
    },
    "HEADER.MENU_ITEM.GAME": {
        "en": "GAMES",
        "ru": "ИГРЫ",
        "ua": "ІГРИ"
    },
    "HEADER.MENU_ITEM.NPM": {
        "en": "NP",
        "ru": "NP",
        "ua": "NP"
    },
    "HEADER.MENU_ITEM.CV": {
        "en": "CV",
        "ru": "РЕЗЮМЕ",
        "ua": "РЕЗЮМЕ"
    },
    "INTRO.TITLE.BRAND_NAME": {
        "en": "V-Market",
        "ru": "V-Market",
        "ua": "V-Market"
    },
    "INTRO.SUB_TITLE.PURPOSE": {
        "en": "The catalog of all pet projects",
        "ru": "Каталог собственных проектов",
        "ua": "Каталог власних проектів"
    },
    "FOOTER.PROFILE.TITLE": {
        "en": "Author's profile in",
        "ru": "Профиль автора в:",
        "ua": "Профіль автора в:"
    },
    "FOOTER.MENU_ITEM.HOME": {
        "en": "HOME",
        "ru": "ГЛАВНАЯ",
        "ua": "ГОЛОВНА"
    },
    "FOOTER.MENU_ITEM.GAME": {
        "en": "GAMES",
        "ru": "ИГРЫ",
        "ua": "ІГРИ"
    },
    "FOOTER.MENU_ITEM.NPM": {
        "en": "NP",
        "ru": "NP",
        "ua": "NP"
    },
    "FOOTER.MENU_ITEM.CV": {
        "en": "CV",
        "ru": "РЕЗЮМЕ",
        "ua": "РЕЗЮМЕ"
    },
};


export function getLanguages() {
    return [
        {
            key: "en",
            value: "English"
        },
        {
            key: "ua",
            value: "Українська"
        },
        {
            key: "ru",
            value: "Русский"
        },
    ];
}

export default translations;
