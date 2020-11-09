import { Reducer } from 'redux';

import { BookingState, AllActions } from './types';

export const initialState: BookingState = {
    from: '',
    to: '',
    rooms: []
};

const reducer: Reducer<BookingState, AllActions> = (state: BookingState = initialState, action: AllActions): any => {
    switch (action.type) {
        case 'GET_AVAILABLE':
            if ('rooms' in action.payload) return { ...state, rooms: action.payload.rooms };
            break;
        case 'DATE_CHANGE':
            return { ...state, ...action.payload };
      default:
        return state;
    }
};

export default reducer;