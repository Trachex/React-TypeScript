import { Action } from 'redux';
import { UpdateRoomType } from '../room/types';

interface BookingType {
    id: Number,
    owner: String,
    from: String,
    to: String,
    roomId: Number
}

export interface BookingState {
    bookings: Array<BookingType>
}

export interface ReserveType extends Action {
    type: String,
    payload: {
        booking: BookingType
    }
}

export interface GetBookingsType extends Action {
    type: String,
    payload: {
        bookings: Array<BookingType>
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
        booking: BookingType
    }
}

export type AllActions = ReserveType | DeleteBookingType | UpdateRoomType | GetBookingsType;