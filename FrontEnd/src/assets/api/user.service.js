
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

const UserService = {
    getUser,
}
export default UserService;