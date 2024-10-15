import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from '../actionTypes/loginType'

// Login
export const login = (email, password, loggedinType) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/v1/admin/authenticate', { email, password, loggedinType }, config)
        localStorage.setItem("token",data.token);
        localStorage.setItem("mid",data.adminID);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getuserdetailsbyID =(id) => async(dispatch)=> {
        try{
            dispatch({ type: LOAD_USER_REQUEST })
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }
            const { data } = await axios.post('/v1/admin/'.id, config)
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: LOAD_USER_FAIL,
                payload: error
            })
        }
}

// Logout user
export const logout = () => async (dispatch) => {
    try {

        await axios.get('/v1/admin/logout')

        dispatch({
            type: LOGOUT_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}