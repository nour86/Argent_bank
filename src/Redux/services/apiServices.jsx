import axios from 'axios'
import {
    loginFail,
    loginSuccess,
    logoutSuccess,
} from '../reducers/loginReducer'

import { userSuccess, userFail } from '../reducers/userReducer'

/*** partie Api ***/
const BASE_URL = 'http://localhost:3001/api/v1'

/***  login function ***/
export const login = (email, password, rememberMe) => async (dispatch) => {
    return axios
        .post(BASE_URL + '/user/login', { email, password })
        .then((response) => {
            dispatch(
                rememberMe
                    ? loginSuccess({
                          body: {
                              email: email,
                              password: password,
                              token: response.data.body.token,
                          },
                      })
                    : loginSuccess({
                          body: {
                              email: '',
                              password: '',
                              token: response.data.body.token,
                          },
                      })
            )
            return response.data
        })
        .catch((err) => {
            dispatch(loginFail(err.response.data.message))
            return err.response.data
        })
}

/***  Get user profile  ***/
export const getUserProfile = (token) => async (dispatch) => {
    return axios
        .post(
            BASE_URL + '/user/profile',
            { token },
            { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
            dispatch(userSuccess(response.data))
            return response.data
        })
        .catch((err) => {
            dispatch(userFail(err.response.data))
            console.log(err.response.data)
            return err.response.data
        })
}

/***  Logout function ***/
export const logout = () => (dispatch) => {
    dispatch(logoutSuccess())
}

const auth_service = { login, getUserProfile, logout }
export default auth_service
