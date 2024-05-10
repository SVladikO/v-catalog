export const YEARS_IN_IT = new Date().getFullYear() - 2015;
export const YEARS_AS_BE_DEVELOPER = 2;
export const YEARS_AS_FE_DEVELOPER_WITHOUT_REACT = 2;
export const YEARS_AS_REACT_DEVELOPER = YEARS_IN_IT-YEARS_AS_BE_DEVELOPER-YEARS_AS_FE_DEVELOPER_WITHOUT_REACT;

const translations = {

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

export const defaultLanguage = 'en';

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
