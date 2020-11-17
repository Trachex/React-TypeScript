import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    CreateRoomType,
    GetRoomsType,
    DeleteRoomType,
    UpdateRoomType,
    RoomState
} from './types';

export const CreateRoom: ActionCreator<ThunkAction<Promise<CreateRoomType | void>, RoomState, void, any>> = (number: Number) => {

    return async (dispatch: Dispatch): Promise<CreateRoomType | void> => {

        try {
            const { data } = await axios.post('/room/create', { number });

            return dispatch({
                type: 'CREATE_ROOM',
                payload: {
                    room: data.room
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const GetRooms: ActionCreator<ThunkAction<Promise<GetRoomsType | void>, RoomState, void, any>> = () => {

    return async (dispatch: Dispatch): Promise<GetRoomsType | void> => {

        try {
            const { data } = await axios.get('/room/getAll');

            return dispatch({
                type: 'GET_ROOMS',
                payload: {
                    rooms: data.rooms
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const DeleteRoom: ActionCreator<ThunkAction<Promise<DeleteRoomType | void>, RoomState, void, any>> = (roomId: Number) => {

    return async (dispatch: Dispatch): Promise<DeleteRoomType | void> => {

        try {
            const { data } = await axios.delete('/room/delete', { data: { id: roomId } });

            return dispatch({
                type: 'DELETE_ROOM',
                payload: {
                    id: data.id
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const UpdateRoom: ActionCreator<ThunkAction<Promise<UpdateRoomType | void>, RoomState, void, any>> = (id: Number, number: Number) => {

    return async (dispatch: Dispatch): Promise<UpdateRoomType | void> => {

        try {
            const { data } = await axios.put('/room/update', { id, number });

            return dispatch({
                type: 'UPDATE_ROOM',
                payload: {
                    room: data.room
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}