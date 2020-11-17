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

      default:
        return state;
    }
};

export default reducer;