import { Action } from 'redux';

interface RoomType {
    id: Number,
    number: Number
}

export interface RoomState {
    rooms: Array<RoomType>
}

export interface CreateRoomType extends Action {
    type: String,
    payload: {
        room: RoomType
    }
}

export interface GetRoomsType extends Action {
    type: String,
    payload: {
        rooms: Array<RoomType>
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
        room: RoomType
    }
}

export type AllActions = CreateRoomType | GetRoomsType  | DeleteRoomType | UpdateRoomType;