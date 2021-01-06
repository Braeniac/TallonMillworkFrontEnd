import axios from 'axios'; 
import {encode as btoa} from 'base-64'; 

import { USERNAME_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, LOGOUT_USER, SET_TOKEN } from "./actionTypes"

//set field username
export const usernameChanged = (text) => {
    return {
        type: USERNAME_CHANGED, 
        payload: text
    }
}

//set field password
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED, 
        payload: text
    }
}

//login user
export const loginUser = ({ username, password }) => {

    console.log(username)
    console.log(password)
    console.log(`Basic ${btoa(username + ":" + password)}`)
    console.log(`http://localhost:8080/api/user/${username}`)

    return (dispatch) => { 
        dispatch({ type: LOGIN_USER })
        return axios.get(
            //`http://10.0.2.2:8080/api/user/${username}` //--for android
            `http://localhost:8080/api/user/${username}`,
            {
                headers: {
                    "Authorization" : `Basic ${btoa(username + ":" + password)}`
                }
            }
        )
        .then(response => loginUserSuccess(dispatch, response))
        .catch(err => console.log(err))
    }
}


//login helper 
const loginUserSuccess = (dispatch, response) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response.data
    }); 
}
//login helper 
const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    }); 
}

