export const YEARS_IN_IT = new Date().getFullYear() - 2015;
export const YEARS_AS_BE_DEVELOPER = 2;
export const YEARS_AS_FE_DEVELOPER_WITHOUT_REACT = 2;
export const YEARS_AS_REACT_DEVELOPER = YEARS_IN_IT-YEARS_AS_BE_DEVELOPER-YEARS_AS_FE_DEVELOPER_WITHOUT_REACT;

const translations = {
  "HEADER.LOGO.TEXT": {
    "en": "V-Catalog",
    "ua": "V-Catalog"
  },
  "HEADER.MENU_ITEM.AUTHOR": {
    "en": "Author",
    "ua": "Author"
  },
  "HEADER.MENU_ITEM.NP": {
    "en": "NP",
    "ua": "Пакети"
  },
  "HEADER.MENU_ITEM.CV": {
    "en": "CV",
    "ua": "Резюме"
  },
  "INTRO.TITLE.BRAND_NAME": {
    "en": "V-Catalog",
    "ua": "V-Catalog"
  },
  "INTRO.SUB_TITLE.PURPOSE": {
    "en": "Pet projects of Vlad Serhiychuk",
    "ua": "Каталог власних проектів"
  },
  "INTRODUCTION.EXPERIENCE.TITLE": {
    "en": "Experience",
    "ua": "Досвід"
  },
  "INTRODUCTION.EXPERIENCE.DETAILS": {
    "en": `${YEARS_IN_IT}+ years in IT industry. Took a part in 10 project with different architecture and complexity.`,
    "ua": `${YEARS_IN_IT}+ років в IT індустрії. Взяв участь в розробці 10ти проектів різної складності і архітектури.`
  },
  "INTRODUCTION.TECHNOLOGY.TITLE": {
    "en": "Used technologies",
    "ua": "Використані технології"
  },
  "INTRODUCTION.TECHNOLOGY.DETAILS": {
    "en": "JS, React, Redux, HTML/CSS, Java, Angular, Node.js, MySQL",
    "ua": "JS, React, Redux, HTML/CSS, Java,  Angular, Node.js, MySQL,"
  },
  "INTRODUCTION.POSITION.TITLE": {
    "en": "Position",
    "ua": "Позиція"
  },
  "INTRODUCTION.POSITION.DETAILS": {
    "en": `Backend Java (${YEARS_AS_BE_DEVELOPER} years) Frontend ${YEARS_IN_IT - YEARS_AS_BE_DEVELOPER}+ years (where React ${YEARS_AS_REACT_DEVELOPER}+)`,
    "ua": `Бекенд Java (${YEARS_AS_BE_DEVELOPER} роки) Фронтенд (${YEARS_IN_IT - YEARS_AS_BE_DEVELOPER}+ роки) (React ${YEARS_AS_REACT_DEVELOPER}+)`
  },
  "INTRODUCTION.TITLE": {
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
  "FOOTER.MENU_ITEM.AUTHOR": {
    "en": "AUTHOR",
    "ua": "AUTHOR"
  },
  "FOOTER.MENU_ITEM.NP": {
    "en": "NP",
    "ua": "ПАКЕТИ"
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

export const websiteLanguages = [
    {
      value: "en",
      title: "English"
    },
    {
      value: "ua",
      title: "Українська"
    }
];

export default translations;
