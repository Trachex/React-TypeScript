import { Reducer } from 'redux';

import { TableState, AllActions } from './types';

export const initialState: TableState = {
    from: '',
    to: '',
    rooms: []
};

const reducer: Reducer<TableState, AllActions> = (state: TableState = initialState, action: AllActions): any => {
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