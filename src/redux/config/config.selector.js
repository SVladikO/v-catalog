import {createSelector} from 'reselect';

const selectConfig = state => state.config;

export const selectCurrentLanguage = createSelector(
    [selectConfig],
    config => config.currentLanguage
)

