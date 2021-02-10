import {
    IChangeTheme,
    ITheme
} from './types';

export const ChangeTheme = (theme: ITheme): IChangeTheme => {
    return {
        type: 'CHANGE_THEME',
        payload: {
            theme
        }
    }
}