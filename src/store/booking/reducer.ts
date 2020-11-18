import { Reducer } from 'redux';

import { BookingState, AllActions } from './types';

export const initialState: BookingState = {
    bookings: []
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

        case 'UPDATE_BOOKINGS':
            if ('booking' in action.payload) {
                const newArr = state.bookings.slice(0);
                const { booking } = action.payload;
                const index = newArr.findIndex(e => { return e.id === booking.id });
                newArr[index] = booking;
                return { ...state, bookings: newArr };
            }
            break;

      default:
        return state;
    }
};

export default reducer;