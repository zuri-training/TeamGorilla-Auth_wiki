
import axios from 'axios'
import authHeader from './auth-header';



// const API_URL = "http://localhost:8000/api/user/"
const API_URL = "https://auth-wiki.onrender.com/api/user/"


const getUser = () => {
    axios.get(API_URL + 'me', {
        headers: authHeader()
    }).then((res) =>{
        return res.data
    })
}
const download = () => {
    const FileDownload = require('js-file-download')
    axios.get(API_URL + 'download', { 
        key: 'value', 
        headers: authHeader()
    }).then(({data}) => {
        // console.log(res)
        FileDownload(data , 'authController.js');
        console.log('success!', data)
    }).catch(err => {
        console.log(err)

    })
}

const UserService = {
    getUser,
    download
}
export default UserService;
