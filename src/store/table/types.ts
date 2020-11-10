import { Action } from 'redux';

export interface TableState {
  from: String,
  to: String,
  rooms: Array<any>
}

export interface GetAvailableType extends Action {
  type: String,
  payload: {
    rooms: Array<any>
  }
}

export interface DateChangeType extends Action {
  type: String,
  payload: {
    from?: String,
    to?: String
  }
}

export type AllActions = GetAvailableType | DateChangeType;