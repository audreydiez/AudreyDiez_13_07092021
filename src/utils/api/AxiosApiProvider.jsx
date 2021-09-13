import axios from 'axios'

const UrlApi = 'http://localhost:3001/api/v1'

export function UserLogin(login, password) {
    return axios
        .post(UrlApi + '/user/login', {
            email: login,
            password: password
        })
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            if (error.response) {
                return error.response.data
            }
        })
}
