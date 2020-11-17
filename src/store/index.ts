import { combineReducers, Reducer } from 'redux';

import { TableState } from './table/types';
import TableReducer from './table/reducer';
import { RoomState } from './room/types';
import RoomReducer from './room/reducer';
import { BookingState } from './booking/types';
import BookingReducer from './booking/reducer';

export interface ApplicationState {
    table: TableState,
    room: RoomState,
    booking: BookingState
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    table: TableReducer,
    room: RoomReducer,
    booking: BookingReducer
});