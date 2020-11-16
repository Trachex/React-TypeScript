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

export interface GetRoomsType extends Action {
    type: String,
    payload: {
        rooms: Array<{
            id: Number,
            number: Number
        }>
    }
}

export interface DeleteRoomType extends Action {
    type: String,
    payload: {
        id: Number
    }
}

export interface UpdateRoomType extends Action {
    type: String,
    payload: {
        room: {
            id: Number,
            number: Number
        }
    }
}

export type AllActions = CreateRoomType | GetRoomsType  | DeleteRoomType | UpdateRoomType;