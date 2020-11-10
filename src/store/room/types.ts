import { Action } from 'redux';

export interface RoomState {
    rooms: Array<any>
}

export interface CreateRoomType extends Action {
    type: String,
    payload: {
        room: {
            id: Number,
            number: Number
        }
    }
}

export type AllActions = CreateRoomType;