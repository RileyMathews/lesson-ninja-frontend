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
            APIManager.registerUser(userData)
                .then(r => r.json())
                .then(response => {
                    const token = response.token
                    localStorage.setItem("token", token)
                    APIManager.createProfile(profileData, profileType)
                        .then(r => r.json())
                        .then(response => {
                            const userInformation = response.user
                            delete response.user
                            this.setUserAndProfileState(userInformation, response, profileType, token)
                            history.push('/')
                        })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },

    // method to get users token and pass it to get profile information method for setting it along with other user information into state
    login: {
        value: function (username, password) {
            const loginInfo = {username, password}
            APIManager.loginUser(loginInfo)
                .then(r => r.json())
                .then(response => {
                    const token = response.token
                    localStorage.setItem("token", token)
                    this.getProfileInformation(token)
                    history.push('/')
                })
        }
    },

    getProfileInformation: {
        value: function (token) {
            APIManager.getAuthCollection("user", "get_single_user=true")
                .then(r => r.json())
                .then(response => {
                    const userData = response[0]
                    const profileType = userData.is_student ? "student" : "teacher"
                    APIManager.getAuthCollection(profileType, "get_single_user=true")
                        .then(r => r.json())
                        .then(response => {
                            delete response[0].user
                            const profileData = response[0]
                            this.setUserAndProfileState(userData, profileData, profileType, token)
                        })
                })
        }
    },

    updateUserProperty: {
        value: function (oldData, propertyToChange, newValue, stateKey) {
            let problems = false
            const data = {...oldData}
            data[propertyToChange] = newValue
            APIManager.updateAuthItem(data.url, data)
                .then(r => {
                    if (r.status >= 400 && r.status < 600) {
                        problems = true
                    }
                    return r.json()
                })
                .then(response => {
                    if (!problems) {
                        this.setProviderState([stateKey], response)
                    } else {
                        APIManager.printErrors(response)
                    }
                })
        }
    },



})

export default UserManager