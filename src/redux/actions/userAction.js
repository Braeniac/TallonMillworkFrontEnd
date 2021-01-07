import axios from 'axios'; 

import { 
    ADD_NEW_USER,
    USER_SUCCESSFULLY_ADDED,
    FAILED_TO_ADD_USER
} from './actionTypes'

// //add user 
// export const addUser = (token, fName, lName, uname, role, password) => {
//     return (dispatch) => {
//         dispatch({ type : ADD_NEW_USER })
//         return axios.post(
//             //'http://10.0.2.2:8080/api/user',  // --android 
//             'http://localhost:8080/api/user',
//             {
//                 "fName" : fName, 
//                 "lName" : lName,
//                 "uname" : uname,
//                 "role"  : role,
//                 "password" : password
//             },
//             {
//                 headers: {
//                     "Authorization" : token
//                 }
//             }
//         ).then(res => console.log(res))
//         .catch(err => console.log(err))
//     }
// }





//delete user 
export const deleteUser = (token, uname) => {
    
    console.log(token)
    console.log(uname)
    console.log(`http://localhost:8080/api/user/${uname}`)

    return (dispatch) => {
        return axios.delete(
            //`http://10.0.2.2:8080/api/user/${uname}`,   //--android
            `http://localhost:8080/api/user/${uname}`,
            {
                "uname" : uname
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



