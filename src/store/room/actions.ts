import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    CreateRoomType,
    RoomState
} from './types';

export const CreateRoom: ActionCreator<ThunkAction<Promise<CreateRoomType>, RoomState, void, any>> = (ref: any) => {
    const name = ref.current!['number'].value;

    return async (dispatch: Dispatch): Promise<CreateRoomType> => {
  
        const room = await (await fetch('/room/create', { method: 'POST', body: JSON.stringify({ name }) })).json();

        return dispatch({
            type: 'CREATE_ROOM',
            payload: {
                room
            }
        });
    }
}
  