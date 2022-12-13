import axios from "axios";

const API_URL = 'https://auth-wiki.onrender.com/api/user/';

const register  = async (firstName, lastName, email, password) => {
    return await axios.post(API_URL + "register", {
            firstName, 
            lastName,
            email,
            password
    }).then((res) => {
        localStorage.setItem('userEmail', JSON.stringify(res.data.user.email))
        return res.data
        
    });
};

const getUserEmail = () => {
    const userEmail = JSON.parse(localStorage.getItem('userEmail'))
    return userEmail
} 


const login = async (email, password) => {
    return  await axios.post(API_URL + "login", {
        email,
        password
    }).then((res) => {
        if (res.data.accessToken){
            localStorage.setItem('user', JSON.stringify(res.data));
        }

        return res.data
    })
}
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}
const reset = () => {

}
const signOut = () => {
    localStorage.removeItem('user')
}

const AuthService = {
    register,
    login,
    getCurrentUser,
    getUserEmail,
    reset,
    signOut
};

export default AuthService;
