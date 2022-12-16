
import axios from 'axios'
import authHeader from './auth-header';


const API_URL = "http://localhost:8000/api/user/"

const getUser = () => {
    axios.get(API_URL + 'me', {
        headers: authHeader
    }).then((res) =>{
        return res.data
    })
}
const download = () => {
    axios.get(API_URL + 'download', { 
        key: 'value', 
        headers: authHeader(),
        responseType: 'blob' }).then( function (response) {
        return response;
    })
}

// function apihelperdownload () {
//     return axios.post(API_URL + "download",{ key: 'value', headers: authHeader(), responseType: 'blob' }).then(function (response) {
//         return response;
//     })
// }
const UserService = {
    getUser,
    download
}
export default UserService;