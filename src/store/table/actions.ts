import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    GetAvailableType,
    DateChangeType,
    TableState
} from './types';

export const GetAvailable: ActionCreator<ThunkAction<Promise<GetAvailableType>, TableState, void, any>> = (from: String, to: String) => {
  return async (dispatch: Dispatch): Promise<GetAvailableType> => {

    const rooms = await (await fetch(`/getAvailable?from=${from}&to=${to}`)).json();
  
    return dispatch({
      type: 'GET_AVAILABLE',
      payload: {
        rooms
      }
    });

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