import { combineReducers } from 'redux'; 
import auth from './authReducer'; 
import project from './projectReducer'; 
import user from './userReducer'; 

export default combineReducers({
    auth, 
    project, 
    user
}); 

