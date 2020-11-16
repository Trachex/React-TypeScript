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

        case 'GET_ROOMS':
            if ('rooms' in action.payload) return { ...state, rooms: action.payload.rooms };
            break;

        case 'DELETE_ROOM':
            if ('id' in action.payload) {
                const { id } = action.payload;
                const rooms = state.rooms.filter(e => e.id !== id);
                return { ...state, rooms };
            }
            break;

        case 'UPDATE_ROOM':
            if ('room' in action.payload) {
                const newArr = state.rooms.slice(0);
                const { room } = action.payload;
                const index = newArr.findIndex(e => { return e.id === room.id });
                newArr[index] = room;

                return { ...state, rooms: newArr };
            }
            break;

      default:
        return state;
    }
};

export default reducer;