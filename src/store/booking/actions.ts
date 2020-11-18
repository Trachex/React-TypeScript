import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    ReserveType,
    DeleteBookingType,
    UpdateBookingType,
    GetBookingsType,
    CreateRoomType,
    GetRoomsType,
    UpdateRoomType,
    DeleteRoomType,
    BookingState
} from './types';

export const Reserve: ActionCreator<ThunkAction<Promise<ReserveType | void>, BookingState, void, any>> = 
    (owner: String, roomId: Number, from: Date, to: Date) => {

    return async (dispatch: Dispatch): Promise<ReserveType | void> => {

        try {
            const { data } = await axios.post('/reserve', { owner, roomId, from, to });
            if (data.success === false) throw new Error(data.text);

            return dispatch({
                type: 'RESERVE',
                payload: {
                    booking: data.booking
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const GetBookings: ActionCreator<ThunkAction<Promise<GetBookingsType | void>, BookingState, void, any>> = () => {

    return async (dispatch: Dispatch): Promise<GetBookingsType | void> => {

        try {
            const { data } = await axios.get('/getAll');
            if (data.success === false) throw new Error(data.text);

            return dispatch({
                type: 'GET_BOOKINGS',
                payload: {
                    bookings: data.bookings
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const UpdateBooking: ActionCreator<ThunkAction<Promise<UpdateBookingType | void>, BookingState, void, any>> = 
    (id: Number, owner: String, roomId: Number, from: String, to: String) => {

    return async (dispatch: Dispatch): Promise<UpdateBookingType | void> => {

        try {
            const { data } = await axios.put('/update', { id, owner, roomId, from, to });
            if (data.success === false) throw new Error(data.text);

            return dispatch({
                type: 'UPDATE_BOOKING',
                payload: {
                    booking: data.booking
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const DeleteBooking: ActionCreator<ThunkAction<Promise<DeleteBookingType | void>, BookingState, void, any>> = (id: Number) => {

    return async (dispatch: Dispatch): Promise<DeleteBookingType | void> => {

        try {
            const { data } = await axios.delete('/delete', { data: { id } });
            if (data.success === false) throw new Error(data.text);

            return dispatch({
                type: 'DELETE_BOOKING',
                payload: {
                    id: data.id
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const CreateRoom: ActionCreator<ThunkAction<Promise<CreateRoomType | void>, BookingState, void, any>> = (number: Number) => {

    return async (dispatch: Dispatch): Promise<CreateRoomType | void> => {

        try {
            const { data } = await axios.post('/room/create', { number });
            if (data.success === false) throw new Error(data.text);

            return dispatch({
                type: 'CREATE_ROOM',
                payload: {
                    room: data.room
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const GetRooms: ActionCreator<ThunkAction<Promise<GetRoomsType | void>, BookingState, void, any>> = () => {

    return async (dispatch: Dispatch): Promise<GetRoomsType | void> => {

        try {
            const { data } = await axios.get('/room/getAll');
            if (data.success === false) throw new Error(data.text);

            return dispatch({
                type: 'GET_ROOMS',
                payload: {
                    rooms: data.rooms
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const UpdateRoom: ActionCreator<ThunkAction<Promise<UpdateRoomType | void>, BookingState, void, any>> = (id: Number, number: Number) => {

    return async (dispatch: Dispatch): Promise<UpdateRoomType | void> => {

        try {
            const { data } = await axios.put('/room/update', { id, number });
            if (data.success === false) throw new Error(data.text);

            return dispatch({
                type: 'UPDATE_ROOM',
                payload: {
                    room: data.room
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const DeleteRoom: ActionCreator<ThunkAction<Promise<DeleteRoomType | void>, BookingState, void, any>> = (roomId: Number) => {

    return async (dispatch: Dispatch): Promise<DeleteRoomType | void> => {

        try {
            const { data } = await axios.delete('/room/delete', { data: { id: roomId } });
            if (data.success === false) throw new Error(data.text);

            return dispatch({
                type: 'DELETE_ROOM',
                payload: {
                    id: data.id
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}