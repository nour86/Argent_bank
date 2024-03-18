import axios from 'axios'
import {
    loginFail,
    loginSuccess,
    logoutSuccess,
    signUpSuccess,
} from '../reducers/loginReducer'

import {
    userSuccess,
    userFail,
    userUpdateSuccess,
    userReset,
} from '../reducers/userReducer'

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
        })
        .catch((err) => {
            dispatch(loginFail(err.response.data.message))
        })
}

/***  Get user profile  ***/
export const getUserProfile = (token) => async (dispatch) => {
    return axios
        .post(
            BASE_URL + '/user/profile',
            {},
            { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
            dispatch(userSuccess(response.data))
            return response.data
        })
        .catch((err) => {
            dispatch(userFail(err.response.data))
            return err.response.data
        })
}

/*** Update user profile ***/
export const updateProfile = (userName, token) => async (dispatch) => {
    return axios
        .put(
            BASE_URL + '/user/profile',
            { userName: userName },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )
        .then((response) => {
            dispatch(userUpdateSuccess(response.data))
            return response.data
        })
        .catch((err) => {
            return err.response.data
        })
}

export const signUp = (formData) => async (dispatch) => {
    const payload = Object.fromEntries(formData.entries())
    return axios
        .post(BASE_URL + '/user/signup', payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            dispatch(
                signUpSuccess({
                    email: payload.email,
                    password: payload.password,
                })
            )
            return response.data
        })
        .catch((err) => {
            return err.response.data
        })
}

/***  Logout function ***/
export const logout = () => async (dispatch) => {
    dispatch(userReset())
    dispatch(logoutSuccess())
}

const auth_service = { login, getUserProfile, logout, updateProfile, signUp }
export default auth_service
