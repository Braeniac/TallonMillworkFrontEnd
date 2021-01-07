import axios from 'axios'
import { ADD_NEW_PROJECT, PROJECT_SUCCESSFULLY_ADDED, FAILED_TO_ADD_PROJECT } from './actionTypes'


//add new project
export const addNewProject = (data, token) => {
    console.log(data)
    return (dispatch) => { 
        return axios.post(
            'http://localhost:8080/api/project',
            { "pname" : data },
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then(res => console.log(res))
        .catch(err => console.log(err))

    }
}

