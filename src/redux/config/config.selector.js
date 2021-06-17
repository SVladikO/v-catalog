import {creaSelector} from 'reselect';

const selectConfig = state => state.config;

export const selectCurrentLanguage = creaSelector(
    [selectConfig],
    (config) => config.currentLanguage
)

