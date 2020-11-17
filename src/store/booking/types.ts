import { Action } from 'redux';

export interface BookingState {
    bookings: Array<{}>
}

export interface ReserveType extends Action {
    type: String,
    payload: {
        booking: {}
    }
}

export type AllActions = ReserveType;