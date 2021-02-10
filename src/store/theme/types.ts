import { Action } from 'redux';

export interface ITheme {
    textColor: String,
    bgColor: String,
    borders: String
}

export interface ThemeState {
    theme: ITheme
}

export interface IChangeTheme extends Action {
    type: String,
    payload: {
        theme: any
    }
}

export type AllActions = IChangeTheme;