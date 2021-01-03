import { USERNAME_CHANGED, PASSWORD_CHANGED } from "../actions/actionTypes";

const INITIAL_STATE = {
    username: '',
    password: '',
    isLoading: false, 
    isLoggedIn: false, 
    error: '', 
    user: {}
}

export default auth = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case USERNAME_CHANGED: 
            return {...state, username: action.payload }
        case PASSWORD_CHANGED: 
            return {...state, password: action.payload }
        default:
            return state; 
    }
}

