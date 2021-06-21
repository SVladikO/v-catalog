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
    "INTRODUCTION.EXPERIENCE.TITLE": {
        "en": "Experience",
        "ru": "",
        "ua": "Досвід"
    },
    "INTRODUCTION.EXPERIENCE.DETAILS": {
        "en": "More than 5 years in IT industry. Took a part in 10 project with different architecture and complexity",
        "ru": "",
        "ua": "Більше 5-ти років в IT індустрії. Взяв участь в розробці 10ти проектів різної складності і архітектури."
    },
    "INTRODUCTION.TECHNOLOGY.TITLE": {
        "en": "Used technologies",
        "ru": "",
        "ua": "Використані технології"
    },
    "INTRODUCTION.TECHNOLOGY.DETAILS": {
        "en": "Java, Angular, React, Redux, Node.js, MySQL, HTML/CSS",
        "ru": "",
        "ua": "Java, Angular, React, Redux, Node.js, MySQL, HTML/CSS"
    },
    "INTRODUCTION.POSITION.TITLE": {
        "en": "Position",
        "ru": "",
        "ua": "Позиція"
    },
    "INTRODUCTION.POSITION.DETAILS": {
        "en": "Backend developer (Java, 2 years) Frontend developer (3 years)",
        "ru": "",
        "ua": "Бекенд (Java, 2 роки) Фронтенд розробник (3 роки)"
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
