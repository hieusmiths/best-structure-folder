import axios from '../axios'
import Constants from '../constants'

class Http {
    static getSth(endPoint, params, headers, options) {
        return axios(Constants.HTTP_METHOD.GET, endPoint, null, params, headers, options)
    }

    static postSth(endPoint, body, headers, options) {
        return axios(Constants.HTTP_METHOD.POST, endPoint, body, null, headers, options)
    }

    static putSth(endPoint, body, params, headers, options) {
        return axios(Constants.HTTP_METHOD.POST, endPoint, body, params, headers, options)
    }

    static deleteSth(endPoint, params, headers, options) {
        return axios(Constants.HTTP_METHOD.DELETE, endPoint, null, params, headers, options)
    }
}

export default Http