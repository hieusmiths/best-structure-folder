import { createAction } from 'utils/action.util';
import * as TYPE from './type';
import {
  REQUEST_userRegister,
  REQUEST_userActiveAccount
} from './effect';

export const A_authRegister = (data) => {
  return async dispatch => {
    try {
      const response = await REQUEST_userRegister(data)
      if (response) {
        dispatch(createAction(TYPE.AUTH_REGISTER_SUCCESS))
        dispatch({type: 'dsdsd'})
      }
    } catch (error) {
      dispatch(createAction(TYPE.AUTH_REGISTER_FAIL))
    }
  }
}

export const A_authActiveAccount = (id) => {
  return async dispatch => {
    try {
      const response = await REQUEST_userActiveAccount(id)
      if (response) {
        dispatch(createAction(TYPE.AUTH_REGISTER_SUCCESS))
        dispatch({type: 'dsdsd'})
      }
    } catch (error) {
      dispatch(createAction(TYPE.AUTH_REGISTER_FAIL))
    }
  }
}