import { PROJECT_SUCCESSFULLY_ADDED, FAILED_TO_ADD_PROJECT, ADD_NEW_PROJECT } from "../actions/actionTypes";

const INITIAL_STATE = {
    isLoading: false, 
    error: '',
    success: false
}

export default project = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case PROJECT_SUCCESSFULLY_ADDED: 
            return {
                ...state,
                success: true,
                isLoading: false, 
                error: ''
            }
        case FAILED_TO_ADD_PROJECT: 
            return {
                ...state,
                error: 'Failed to add project, Please try again...',
                isLoading: false
            }
        case ADD_NEW_PROJECT: 
            return {
                ...state,
                isLoading: true
            }
        default: 
            return state; 
    }
}