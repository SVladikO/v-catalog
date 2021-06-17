import {ConfigActionTypes} from "./config.types";

export const setSiteLanguage = language => ({
    type: ConfigActionTypes.SET_SITE_LANGUAGE,
    payload: language
})