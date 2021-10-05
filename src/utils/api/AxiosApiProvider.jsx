import axios from 'axios'

const UrlApi = 'http://localhost:3001/api/v1'

export function getUserToken(login, password, rememberMe) {
    return axios
        .post(UrlApi + '/user/login', {
            email: login,
            password: password
        })
        .then(function (response) {
            if (response.data.body.token) {
                if (rememberMe) {
                    localStorage.setItem('userToken', response.data.body.token)
                }
                return response
            }
        })
        .catch(function (error) {
            if (error.response) {
                return error.response.data
            }
        })
}

export function getUserProfile(token) {
    const route = UrlApi + `/user/profile`

    return axios
        .post(
            route,
            {},
            {
                headers: {
                    Authorization: `Bearer ` + token
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

export function updateUserProfile(firstName, lastName, token) {
    const route = UrlApi + `/user/profile`

    return axios
        .put(
            route,
            { firstName, lastName },
            {
                headers: {
                    Authorization: `Bearer ` + token
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
