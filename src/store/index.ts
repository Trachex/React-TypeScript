import { combineReducers, Reducer } from 'redux';

import { TableState } from './table/types';
import TableReducer from './table/reducer';
import { RoomState } from './room/types';
import RoomReducer from './room/reducer';

export interface ApplicationState {
    table: TableState,
    room: RoomState
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    table: TableReducer,
    room: RoomReducer
});