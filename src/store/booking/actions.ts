import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    ReserveType,
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