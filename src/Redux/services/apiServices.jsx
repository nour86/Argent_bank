import axios from 'axios'
import {
    loginFail,
    loginSuccess,
    logoutSuccess,
} from '../reducers/loginReducer'
// import {
//     userFail,
//     userLogout,
//     userSuccess,
//     userUpdateSuccess,
//     userUpdateFail,
// } from '../actions/userAction'

import { updateLocalStorage } from './localStorageServices'

/*** partie Api ***/
const BASE_URL = 'http://localhost:3001/api/v1'

/***  login function ***/
export const login = (email, password, rememberMe) => (callback) => {
    axios
        .post(BASE_URL + '/user/login', { email, password })
        .then((response) => {
            const token = response.data.body.token

            updateLocalStorage(rememberMe, [
                { email: email },
                { password: password },
                { token: token },
            ])

            callback(loginSuccess())
            console.log(response.data)
            return response.data
        })
        .catch((err) => {
            callback(loginFail(err.response.data.message))
        })
}

/***  Get user profile  ***/
export const userProfile = (value_token) => (dispatch) => {
    const token =
        localStorage.getItem('token') !== null
            ? localStorage
                  .getItem('token')
                  .slice(1, localStorage.getItem('token').length - 1)
            : value_token
    axios
        .post(
            BASE_URL + '/user/profile',
            { token },
            { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
            dispatch(userSuccess(response.data))
            dispatch(isToken())
        })
        .catch((err) => {
            dispatch(userFail(err.response))
        })
}

/*** Update user profile ***/
export const updateProfile = (userName, value_token) => (dispatch) => {
    const token =
        localStorage.getItem('token') !== null
            ? localStorage
                  .getItem('token')
                  .slice(1, localStorage.getItem('token').length - 1)
            : value_token
    axios
        .put(
            BASE_URL + '/user/profile',
            { userName: userName },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )
        .then((res) => {
            dispatch(userUpdateSuccess(res.data))
            console.log('dattataat reponse', res.data)
        })
        .catch((err) => {
            dispatch(userUpdateFail(err.response))
        })
}

/***  Logout function ***/
export const logout = () => (dispatch) => {
    sessionStorage.clear()
    updateLocalStorage(rememberMe, [{ token: '' }])
    dispatch(userLogout())
    dispatch(logoutSuccess())
}

const auth_service = { login, userProfile, logout }
export default auth_service
