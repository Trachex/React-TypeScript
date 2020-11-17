import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    GetAvailableType,
    DateChangeType,
    TableState
} from './types';

export const GetAvailable: ActionCreator<ThunkAction<Promise<GetAvailableType | void>, TableState, void, any>> = (from: String, to: String) => {

  return async (dispatch: Dispatch): Promise<GetAvailableType | void> => {

    try {
      const { data } = await axios.get(`/getAvailable?from=${from}&to=${to}`);

      return dispatch({
        type: 'GET_AVAILABLE',
        payload: {
          rooms: data.rooms
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export const DateChange = (date: String, choice: String): DateChangeType => {
  const payload:any = {};

  choice === 'from' ? payload.from = date : payload.to = date;

  return {
    type: 'DATE_CHANGE',
    payload
  }
}