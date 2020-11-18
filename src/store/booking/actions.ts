import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    ReserveType,
    DeleteBookingType,
    UpdateBookingType,
    GetBookingsType,
    BookingState
} from './types';

export const Reserve: ActionCreator<ThunkAction<Promise<ReserveType | void>, BookingState, void, any>> = 
    (owner: String, roomId: Number, from: Date, to: Date) => {

    return async (dispatch: Dispatch): Promise<ReserveType | void> => {

        try {
            const { data } = await axios.post('/reserve', { owner, roomId, from, to });

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

export const DeleteBooking: ActionCreator<ThunkAction<Promise<DeleteBookingType | void>, BookingState, void, any>> = (id: Number) => {

    return async (dispatch: Dispatch): Promise<DeleteBookingType | void> => {

        try {
            const { data } = await axios.delete('/delete', { data: { id } });

            return dispatch({
                type: '',
                payload: {
                    id: data.id
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const UpdateBooking: ActionCreator<ThunkAction<Promise<UpdateBookingType | void>, BookingState, void, any>> = 
    (owner: String, roomId: Number, from: String, to: String) => {

    return async (dispatch: Dispatch): Promise<UpdateBookingType | void> => {

        try {
            const { data } = await axios.put('/update', { owner, roomId, from, to });

            return dispatch({
                type: '',
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

            return dispatch({
                type: '',
                payload: {
                    bookings: data.bookings
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}