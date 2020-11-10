import { Reducer } from 'redux';

import { RoomState, AllActions } from './types';

export const initialState: RoomState = {
    rooms: []
};

const reducer: Reducer<RoomState, AllActions> = (state: RoomState = initialState, action: AllActions): any => {
    switch (action.type) {
        case 'CREATE_ROOM':
            if ('room' in action.payload) {
                const rooms = state.rooms.slice(0);
                rooms.push(action.payload.room);
                return { ...state, rooms };
            }
            break;

      default:
        return state;
    }
};

export default reducer;