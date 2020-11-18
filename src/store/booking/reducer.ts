import { Reducer } from 'redux';

import { BookingState, AllActions } from './types';

export const initialState: BookingState = {
    bookings: [],
    rooms: []
};

const reducer: Reducer<BookingState, AllActions> = (state: BookingState = initialState, action: AllActions): any => {
    switch (action.type) {
        case 'RESERVE':
            if ('booking' in action.payload) {
                const bookings = state.bookings.slice(0);
                bookings.push(action.payload.booking);
                return { ...state, bookings };
            }
            break;

        case 'DELETE_BOOKING':
            if ('id' in action.payload) {
                const { id } = action.payload;
                const bookings = state.bookings.filter(e => e.id !== id);
                return { ...state, bookings };
            }
            break;

        case 'GET_BOOKINGS':
            if ('bookings' in action.payload) {
                return { ...state, bookings: action.payload.bookings };
            }
            break;

        case 'UPDATE_BOOKING':
            if ('booking' in action.payload) {
                const newArr = state.bookings.slice(0);
                const { booking } = action.payload;
                const index = newArr.findIndex(e => { return e.id === booking.id });
                newArr[index] = booking;
                return { ...state, bookings: newArr };
            }
            break;

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

        case 'UPDATE_ROOM':
            if ('room' in action.payload) {
                const newArr = state.rooms.slice(0);
                const { room } = action.payload;
                const index = newArr.findIndex(e => { return e.id === room.id });
                newArr[index] = room;

                return { ...state, rooms: newArr };
            }
            break;

        case 'DELETE_ROOM':
            if ('id' in action.payload) {
                const { id } = action.payload;
                const rooms = state.rooms.filter(e => e.id !== id);
                return { ...state, rooms };
            }
            break;

      default:
        return state;
    }
};

export default reducer;