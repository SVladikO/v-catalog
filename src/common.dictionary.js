export const YEARS_IN_IT = new Date().getFullYear() - 2015;
export const YEARS_AS_BE_DEVELOPER = 2;
export const YEARS_AS_FE_DEVELOPER_WITHOUT_REACT = 2;
export const YEARS_AS_REACT_DEVELOPER = YEARS_IN_IT-YEARS_AS_BE_DEVELOPER-YEARS_AS_FE_DEVELOPER_WITHOUT_REACT;

const translations = {
  "HEADER.LOGO.TEXT": {
    "en": "V-Market",
    "ua": "V-Market"
  },
  "HEADER.MENU_ITEM.GAME": {
    "en": "Games",
    "ua": "Ігри"
  },
  "HEADER.MENU_ITEM.NPM": {
    "en": "NPM",
    "ua": "Пакети"
  },
  "HEADER.MENU_ITEM.CV": {
    "en": "CV",
    "ua": "Резюме"
  },
  "INTRO.TITLE.BRAND_NAME": {
    "en": "V-Market",
    "ua": "V-Market"
  },
  "INTRO.SUB_TITLE.PURPOSE": {
    "en": "The catalog of all pet projects",
    "ua": "Каталог власних проектів"
  },
  "INTRODUCTION.EXPERIENCE.TITLE": {
    "en": "Experience",
    "ua": "Досвід"
  },
  "INTRODUCTION.EXPERIENCE.DETAILS": {
    "en": `${YEARS_IN_IT}+ years in IT industry. Took a part in 10 project with different architecture and complexity`,
    "ua": `${YEARS_IN_IT}+ років в IT індустрії. Взяв участь в розробці 10ти проектів різної складності і архітектури.`
  },
  "INTRODUCTION.TECHNOLOGY.TITLE": {
    "en": "Used technologies",
    "ua": "Використані технології"
  },
  "INTRODUCTION.TECHNOLOGY.DETAILS": {
    "en": "JS, React, Java, Redux, HTML/CSS, Angular, Node.js, MySQL",
    "ua": "JS, React, Java, Redux, HTML/CSS,  Angular, Node.js, MySQL,"
  },
  "INTRODUCTION.POSITION.TITLE": {
    "en": "Position",
    "ua": "Позиція"
  },
  "INTRODUCTION.POSITION.DETAILS": {
    "en": `Backend developer Java (${YEARS_AS_BE_DEVELOPER} years) Frontend developer ${YEARS_IN_IT - YEARS_AS_BE_DEVELOPER}+ years (where React ${YEARS_AS_REACT_DEVELOPER}+)`,
    "ua": `Бекенд (Java ${YEARS_AS_BE_DEVELOPER} роки) Фронтенд розробник (${YEARS_IN_IT - YEARS_AS_BE_DEVELOPER}+ роки) (React ${YEARS_AS_REACT_DEVELOPER}+)`
  },
  "INTRODUCTION.COMPANY.TITLE": {
    "en": "Worked with companies:",
    "ua": "Працював з компаніями:"
  },
  "FOOTER.PROFILE.TITLE": {
    "en": "Author's profile in",
    "ua": "Профіль автора в:"
  },
  "FOOTER.MENU_ITEM.HOME": {
    "en": "HOME",
    "ua": "ГОЛОВНА"
  },
  "FOOTER.MENU_ITEM.GAME": {
    "en": "GAMES",
    "ua": "ІГРИ"
  },
  "FOOTER.MENU_ITEM.NPM": {
    "en": "NP",
    "ua": "NP"
  },
  "FOOTER.MENU_ITEM.CV": {
    "en": "CV",
    "ua": "РЕЗЮМЕ"
  },
  "CLIPBOARD.TOOLTIP.CLICKED.TITLE": {
    "en": "Copied!",
    "ua": "Скопійовано!"
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
  ];
}

export default translations;
