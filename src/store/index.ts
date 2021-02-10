import { combineReducers, Reducer } from 'redux';

import { TableState } from './table/types';
import TableReducer from './table/reducer';
import { BookingState } from './booking/types';
import BookingReducer from './booking/reducer';
import { ThemeState } from './theme/types';
import ThemeReducer from './theme/reducer';

export interface ApplicationState {
    table: TableState,
    booking: BookingState,
    theme: ThemeState
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    table: TableReducer,
    booking: BookingReducer,
    theme: ThemeReducer
});