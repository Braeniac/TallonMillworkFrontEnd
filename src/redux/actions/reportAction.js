import axios from 'axios'; 

import {
    SUBMIT_REPORT,
    SUBMIT_REPORT_SUCCESS,
    SUBMIT_REPORT_FAIL,
    RESET_REPORT
 } from "./actionTypes"


export const submitReport = (token, rname, pid, date, humidity, weather, siteConditions, obstacles, toDo, notes, nextDayPlan, creatorUid, supervisorUid) => {
    return (dispatch) => {
        dispatch({ type : SUBMIT_REPORT })
        return axios.post(
            // 'http://10.0.2.2:8080/api/report', //--android
            'http://localhost:8080/api/report',
            {
                "rname" : rname,
                "pid" : pid,
                "date" : date,
                "humidity" : humidity,
                "weather" : weather,
                "siteConditions" : siteConditions,  
                "obstacles" : obstacles,
                "toDo" : toDo,
                "notes" : notes, 
                "nextDayPlan" : nextDayPlan,
                "creatorUid" : creatorUid,
                "supervisorUid" : supervisorUid
            },
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then( res => dispatch({ type : SUBMIT_REPORT_SUCCESS, payload : res.data }))
        .catch( () => dispatch({ type : SUBMIT_REPORT_FAIL }))
    }
}

export const resetReport = () => {
    return {
        type: RESET_REPORT
    }
}



//get report 
export const retrieveReport = () => {
    return (dispatch) => {
        return axios.get(
            // 'http://10.0.2.2:8080/api/report', //--android
            'http://localhost:8080/api/report',
            {
                "rname" : rname,
                "pid" : pid,
                "date" : date,
                "humidity" : humidity,
                "weather" : weather,
                "siteConditions" : siteConditions,  
                "obstacles" : obstacles,
                "toDo" : toDo,
                "notes" : notes, 
                "nextDayPlan" : nextDayPlan,
                "creatorUid" : creatorUid,
                "supervisorUid" : supervisorUid
            },
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then( res => dispatch({ type : SUBMIT_REPORT_SUCCESS, payload : res.data }))
        .catch( () => dispatch({ type : SUBMIT_REPORT_FAIL }))
    }
}


