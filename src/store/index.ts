import { combineReducers, Reducer } from 'redux';

import { BookingState } from './booking/types';
import BookingReducer from './booking/reducer';

export interface ApplicationState {
    booking: BookingState
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    booking: BookingReducer
});