import { combineReducers } from 'redux'; 
import auth from './authReducer'; 
import project from './projectReducer'; 

export default combineReducers({
    auth, 
    project
}); 

