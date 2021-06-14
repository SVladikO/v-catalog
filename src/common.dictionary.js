const translations = {
    "HEADER.LOGO.TEXT": {
        "en": "V-Market",
        "ru": "V-Market",
        "ua": "V-Market"
    },
    "HEADER.MENU_ITEM.GAME": {
        "en": "Games",
        "ru": "Игры",
        "ua": "Ігри"
    },
    "HEADER.MENU_ITEM.NPM": {
        "en": "NPM",
        "ru": "Пакеты",
        "ua": "Пакети"
    },
    "HEADER.MENU_ITEM.CV": {
        "en": "CV",
        "ru": "Резюме",
        "ua": "Резюме"
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
