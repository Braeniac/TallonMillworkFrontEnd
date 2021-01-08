import axios from 'axios'; 


export const submitReport = (token, rname, pid, date, humidity, weather, siteConditions, obstacles, toDo, notes, nextDayPlan, creatorUid, supervisorUid) => {
    return (dispatch) => {
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
        ).then(res => console.log(res))
        .catch(err => console.log(err))
    }
}