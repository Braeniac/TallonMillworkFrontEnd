import { USERNAME_CHANGED } from "./actionTypes"

export const usernameChanged = (text) => {
    return {
        type: 'username_changed', 
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: 'password_changed', 
        payload: text
    }
}

export const loginUser = ({ username, password }) => {
    return {
        
    }
}