import { combineReducers, Reducer } from 'redux';

import { TableState } from './table/types';
import TableReducer from './table/reducer';

export interface ApplicationState {
    table: TableState
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    table: TableReducer
});