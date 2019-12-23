import http from 'services/http';
import * as API from '../../api-clients/auth.api';
import { httpHandleResponse } from 'utils/http.util'

export const REQUEST_userRegister = async (data) => {
  try {
      const response = await http.postSth(API.API_AUTH_REGISTER, data)
      return httpHandleResponse(response)
  } catch (error) {
    return false;
  }
}

export const REQUEST_userActiveAccount = async (id) => {
  try {
      const response = await http.getSth(`${API.API_AUTH_ACTIVE_ACCOUNT}${id}`)
      return httpHandleResponse(response)
  } catch (error) {
    console.log(error)
    return false;
  }
}
