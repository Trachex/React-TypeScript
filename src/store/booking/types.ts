import { Action } from 'redux';
import { UpdateRoomType } from '../room/types';

export interface BookingState {
    bookings: Array<{}>
}

export interface ReserveType extends Action {
    type: String,
    payload: {
        booking: {}
    }
}

export interface GetBookingsType extends Action {
    type: String,
    payload: {
        bookings: Array<{}>
    }
}

export interface DeleteBookingType extends Action {
    type: String,
    payload: {
        id: Number
    }
}

export interface UpdateBookingType {
    type: String,
    payload: {
        booking: {}
    }
}

export type AllActions = ReserveType | DeleteBookingType | UpdateRoomType | GetBookingsType;