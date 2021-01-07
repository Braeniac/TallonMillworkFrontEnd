import { 
    ADD_NEW_USER,
    USER_SUCCESSFULLY_ADDED,
    FAILED_TO_ADD_USER
} from "../actions/actionTypes";

const INITIAL_STATE = {
    isFetching : false,
    user : null, 
    error: '',
    success : false
}

export default user = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_NEW_USER: 
            return {
                ...state,
                isFetching : true
            }
        case USER_SUCCESSFULLY_ADDED: 
            return {
                ...state,
                isFetching : false, 
                success : true 
            }
        case FAILED_TO_ADD_USER: 
            return {
                ...state, 
                isFeching : false, 
                success : false, 
                error : 'User was not added. Please try again!'
            }
        default:
            return state;
    }
}

