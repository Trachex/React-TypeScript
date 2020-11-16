import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    CreateRoomType,
    GetRoomsType,
    DeleteRoomType,
    UpdateRoomType,
    RoomState
} from './types';

export const CreateRoom: ActionCreator<ThunkAction<Promise<CreateRoomType>, RoomState, void, any>> = (ref: any) => {
    const number = ref.current!['number'].value;

    return async (dispatch: Dispatch): Promise<CreateRoomType> => {

        const { room } = await (await fetch('/room/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ number })
        })).json();

        return dispatch({
            type: 'CREATE_ROOM',
            payload: {
                room
            }
        });
    }
}

export const GetRooms: ActionCreator<ThunkAction<Promise<GetRoomsType>, RoomState, void, any>> = () => {

    return async (dispatch: Dispatch): Promise<GetRoomsType> => {
  
        const { rooms } = await (await fetch('/room/getAll')).json();

        return dispatch({
            type: 'GET_ROOMS',
            payload: {
                rooms
            }
        });
    }
}

export const DeleteRoom: ActionCreator<ThunkAction<Promise<DeleteRoomType>, RoomState, void, any>> = (roomId: Number) => {

    return async (dispatch: Dispatch): Promise<DeleteRoomType> => {
  
        const { id } = await (await fetch('/room/delete', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: roomId })
        })).json();

        return dispatch({
            type: 'DELETE_ROOM',
            payload: {
                id
            }
        });
    }
}

export const UpdateRoom: ActionCreator<ThunkAction<Promise<UpdateRoomType>, RoomState, void, any>> = (id: Number, ref: any) => {
    const number = ref.current!['number'].value;

    return async (dispatch: Dispatch): Promise<UpdateRoomType> => {
  
        const { room } = await (await fetch('/room/update', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, number })
        })).json();

        return dispatch({
            type: 'UPDATE_ROOM',
            payload: {
                room
            }
        });
    }
}