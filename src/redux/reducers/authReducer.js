import { USERNAME_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, LOGOUT_USER, SET_TOKEN } from "../actions/actionTypes";
import {encode as btoa} from 'base-64'; 

const INITIAL_STATE = {
    username: '',
    password: '',
    user : null,
    isLoading: false, 
    isLoggedIn: false, 
    error: '',     
    token: ''
}

export default auth = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case USERNAME_CHANGED: 
            return {
                ...state, 
                username: action.payload
            }
        case PASSWORD_CHANGED: 
            return {
                ...state, 
                password: action.payload
            }
        case LOGIN_USER_SUCCESS: 
            return {
                ...state, 
                user: action.payload, 
                isLoggedIn: true, 
                isloading: false,
                error: '', 
                username: '',
                password: ''
            }
        case LOGIN_USER_FAIL: 
            return {
                ...state, 
                error: 'Authentication failed.', 
                password: '', 
                username: '',
                isloading: false
            }
        case LOGIN_USER: 
            return {
                ...state, 
                isLoading : true, 
                error : ''
            }
        default:
            return state; 
    }
}

