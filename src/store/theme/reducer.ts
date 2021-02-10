import { Reducer } from 'redux';
import { ThemeState, AllActions } from './types';
import { BaseTheme } from './themes';

export const initialState: ThemeState = {
    theme: BaseTheme
};

const reducer: Reducer<ThemeState, AllActions> = (state: ThemeState = initialState, action: AllActions): any => {
    switch (action.type) {
        case 'CHANGE_THEME':
            if ('theme' in action.payload)
                return { ...state, theme: action.payload.theme };
            break;

        default:
        return state;
    }
};

export default reducer;