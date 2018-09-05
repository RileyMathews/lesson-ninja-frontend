/*  
    module: user manager
    author: riley mathews
    purpose: to hold methods dealing with handeling user data and authentication
*/
import APIManager from './APIManager'
import history from '../history'


const UserManager = Object.create(null, {

    // method to register a user
    register: {
        value: function (userData, profileData, profileType) {
            console.log(userData)
            APIManager.registerUser(userData)
                .then(r => r.json())
                .then(response => {
                    const token = response.token
                    localStorage.setItem("token", token)
                    console.log(profileData)
                    APIManager.createProfile(profileData, profileType)
                        .then(r => r.json())
                        .then(response => {
                            const userInformation = response.user
                            delete response.user
                            this.setUserState(userInformation, response, profileType, token)
                            history.push('/')
                        })
                })
        }
    },

    login: {
        value: function (username, password) {
            console.log(username, password)
        }
    },

    setUserState: {
        value: function (userData, profileData, profileType, token) {
            this.setState({
                user: userData,
                [profileType]: profileData,
                authToken: token
            })
        }
    }

})

export default UserManager