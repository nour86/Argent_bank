import axios from 'axios'
import {
    loginFail,
    loginSuccess,
    logoutSuccess,
} from '../reducers/loginReducer'

import { userSuccess, userFail } from '../reducers/userReducer'

import { removeTokenFromLocalStorage } from './localStorageServices'

/*** partie Api ***/
const BASE_URL = 'http://localhost:3001/api/v1'

/***  login function ***/
export const login = (email, password) => async (dispatch) => {
    return axios
        .post(BASE_URL + '/user/login', { email, password })
        .then((response) => {
            dispatch(loginSuccess(response.data.body.token))
            console.log('succes')
            return response.data
        })
        .catch((err) => {
            dispatch(loginFail(err.response.data.message))
            console.log('erreur rencontrée')
            return err.response.data
        })
}

/***  Get user profile  ***/
export const getUserProfile = (token) => (dispatch) => {
    axios
        .post(
            BASE_URL + '/user/profile',
            { token },
            { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
            dispatch(userSuccess(response.data))
            console.log(response.data)
        })
        .catch((err) => {
            dispatch(userFail(err.response))
        })
}

/***  Logout function ***/
export const logout = () => (dispatch) => {
    removeTokenFromLocalStorage()
    dispatch(logoutSuccess())
}

const auth_service = { login, getUserProfile, logout }
export default auth_service
