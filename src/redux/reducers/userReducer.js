import { 
    ADD_NEW_USER,
    USER_SUCCESSFULLY_ADDED,
    FAILED_TO_ADD_USER,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    RESET_USER_STATE 
} from "../actions/actionTypes";

const INITIAL_STATE = {
    isFetching : false,
    isDeleting : false,
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
        case DELETE_USER: 
            return {
                ...state,
                isDeleting : true,
                success : false
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isDeleting : false,
                success : true,
                error : ''
            }
        case DELETE_USER_FAIL :
            return {
                ...state,
                isDeleting : false, 
                error : 'User was not deleted. Please try again!',
                success : false
            }
        case RESET_USER_STATE: 
            return {
                ...state,
                isFetching : false,
                isDeleting : false,
                user : null, 
                error: '',
                success : false
            }
        default:
            return state;
    }
}

