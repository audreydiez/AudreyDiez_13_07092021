import axios from 'axios'

const UrlApi = 'http://localhost:3001/api/v1'

export function UserLogin(login, password) {
    return axios
        .post(UrlApi + '/user/login', {
            email: login,
            password: password
        })
        .then(function (response) {
            if (response.data.body.token) {
                localStorage.setItem('userToken', response.data.body.token)
                return response
            }
        })
        .catch(function (error) {
            if (error.response) {
                return error.response.data
            }
        })
}

export function getUserProfile() {
    const route = UrlApi + `/user/profile`

    return axios
        .post(
            route,
            {},
            {
                headers: {
                    Authorization: `Bearer ` + localStorage.getItem('userToken')
                }
            }
        )
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error.response
        })
}
