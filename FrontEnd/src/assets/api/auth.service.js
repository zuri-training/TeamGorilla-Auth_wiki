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
        if (res.data.access_token){
            localStorage.setItem('user', JSON.stringify(res.data));
            localStorage.removeItem('userEmail');
        }

        return res.data
    })
}
const getCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user)
    return user

}
const reset =  async (email, password) => {
    const resetToken = JSON.parse(localStorage.getItem('resetToken'))
        
        return await axios.post(API_URL + "resetpassword", {
            resetToken,
            password
        }).then((res) => {
            localStorage.removeItem('resetToken')
            localStorage.removeItem('userEmail')
            return res.data
        })

}


const forgot = async (email) => {
    return await axios.post(API_URL + "forgotpassword", {
        email,
}).then((res) => {
    localStorage.setItem('resetToken', JSON.stringify(res.data.resetToken))
    localStorage.setItem('userEmail', JSON.stringify(email))
    return res.data
    
});

}
const signOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('userEmail')
}

const AuthService = {
    register,
    login,
    getCurrentUser,
    getUserEmail,
    reset,
    signOut,
    forgot
};

export default AuthService;
