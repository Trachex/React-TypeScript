import { Action } from 'redux';

interface BookingType {
    id: Number,
    owner: String,
    from: String,
    to: String,
    roomId: Number
}

interface RoomType {
    id: Number,
    number: Number
}

export interface BookingState {
    bookings: Array<BookingType>,
    rooms: Array<RoomType>
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

export interface CreateRoomType extends Action {
    type: String,
    payload: {
        room: RoomType
    }
}

export interface GetRoomsType extends Action {
    type: String,
    payload: {
        rooms: Array<RoomType>
    }
}

export interface DeleteRoomType extends Action {
    type: String,
    payload: {
        id: Number
    }
}

export interface UpdateRoomType extends Action {
    type: String,
    payload: {
        room: RoomType
    }
}

export type AllActions = ReserveType | DeleteBookingType | GetBookingsType | CreateRoomType | GetRoomsType  | DeleteRoomType | UpdateRoomType;