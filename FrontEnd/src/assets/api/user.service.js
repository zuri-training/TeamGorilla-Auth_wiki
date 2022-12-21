
import axios from 'axios'
import authHeader from './auth-header';
import {useNavigate} from 'react-router-dom'





// const API_URL = "http://localhost:8000/api/user/"
const API_URL = "https://auth-wiki.onrender.com/api/user/"


const getUser = async () => {
    return await axios.get(API_URL + 'me', {
        headers: authHeader()
    }).then((res) =>{
        return res.data
    }).catch(err => {
        return err
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
    }).catch(err => {
        // console.log( err.response.status)
    })
}

const getAllComments = async () =>{
    return await axios.get(API_URL + 'comments').then((res) => {
        const comments = []
        res.data.comments.map((i) => {
            let date = new Date(Date.parse(i.createdAt))
            let now = new Date().getTime();
            let delta = Math.abs(now - date) / 1000;
   
            var days = Math.floor(delta / 86400);
            // delta -= days * 86400;

            var hours = Math.floor(delta / 3600) % 24;
            // delta -= hours * 3600;

            var minutes = Math.floor(delta / 60) % 60;
            // delta -= minutes * 60;

            let time
             if(delta >= 86400){
                time = `${days}d`
            }else if(delta >= 3600 && delta < 86400){
                time = `${hours}h`
            } else{
                time = `${minutes}m`
            }
            let comment = {
                id: i._id,
                body: i.body,
                author: i.author,
                time: time
            }
            comments.push(comment)
        })
        return comments
    }).catch(err =>{
        console.log(err.message)
    })
}

const getCommentsNumber = async () => {
    return await axios.get(API_URL + "comments/number").then((res) => {
        return res.data.length
    }).catch(err => {
        console.log(err.message)
    })
}

const createComment = async (comment) => {
    return  await axios.post(API_URL + "comments", {
        comment
    }, {
        headers: authHeader(),
    }).then((res) => {
        return res
    }).catch(err => {
        return err
    })
}
const getDownloadNumber = async () => {
    return await axios.get(API_URL + "download/number").then((res) => {
        console.log(res)
        return res.data.downloads
    }).catch(err => {
        console.log(err)

    })
}
const check = async (bool) =>{
    if (bool === false) {
        return await axios.get(API_URL + 'hate').then((res) =>{
            return res
        })
    }else{
        return await axios.get(API_URL + 'like').then((res) =>{
            return res
        })
    }
}

const likesNumber = async () => {
    return await axios.get(API_URL + 'likes').then((res) =>{
        return res.likes
    })
}
const UserService = {
    getUser,
    download,
    getAllComments,
    createComment,
    getCommentsNumber,
    getDownloadNumber,
    check,
    likesNumber,
}
export default UserService;
