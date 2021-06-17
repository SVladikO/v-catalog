import {ConfigActionTypes} from './config.types';

const INITIAL_STATE = {
    currentLanguage: 'en',
}

const configReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ConfigActionTypes.SET_SITE_LANGUAGE:
            return {
                ...state,
                currentLanguage: action.payload
            }

        default:
            return state;
    }
}

export default configReducer;