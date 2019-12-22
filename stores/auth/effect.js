import http from 'services/http';
import * as API from '../../api-clients/auth.api';
import { httpResponseHandle } from 'utils/http.util'

export const REQUEST_userRegister = async (data) => {
  try {
      const response = await http.postSth(API.API_AUTH_REGISTER, data)
      return httpResponseHandle(response)
  } catch (error) {
    return false;
  }
}

export const REQUEST_userActiveAccount = async (id) => {
  try {
    console.log(id)
      const response = await http.getSth(`${API.API_AUTH_ACTIVE_ACCOUNT}${id}`)
      console.log(response)
      return httpResponseHandle(response)
  } catch (error) {
    console.log(error)
    return false;
  }
}
