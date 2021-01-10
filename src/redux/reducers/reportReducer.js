import {
    SUBMIT_REPORT,
    SUBMIT_REPORT_SUCCESS,
    SUBMIT_REPORT_FAIL,
    RESET_REPORT
 } from "../actions/actionTypes"; 

const INITIAL_STATE = {
    report: null,
    reportError: '',
    retrieving: false,
    reportSuccess: false,
    
}

export default auth = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SUBMIT_REPORT:
            return {
                ...state,
                retrieving : true 
            }
        case SUBMIT_REPORT_SUCCESS: 
            return {
                ...state, 
                retrieving : false, 
                reportSuccess : true, 
                reportError : '',
            }
        case SUBMIT_REPORT_FAIL:
            return {
                ...state, 
                retrieving : false, 
                reportSuccess : false, 
                reportError : 'Submission failed. Please double-check and try again!'
            }
        case RESET_REPORT: {
            return {
                ...state,
                report: null,
                reportError: '',
                retrieving: false,
                reportSuccess: false,
            }
        }
        default:
            return state; 
    }

}