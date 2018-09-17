/*  
    module: user manager
    author: riley mathews
    purpose: to hold methods dealing with handeling user data and authentication
*/
import APIManager from './APIManager'
import history from '../history'


const UserManager = Object.create(null, {

    // entry point to creating a user
    startRegistration: {
        value: function (userData, profileData, profileType) {
            if (profileType === "teacher") {
                // first calls a method that attempts to create an s3 folder and returns a promise of true or false that allows us to continue
                this._registerCreateDirectory(userData.username)
                    .then(response => {
                        if (response) {
                            // if the folder was created continue with registration
                            this._registerCreateUserAndProfile(userData, profileData, profileType)
                        } else {
                            alert("Sorry something wen't wrong setting up your account, try using a different username")
                        }
                    })
            } else {
                // if the user is not a teacher, they do not need an s3 folder so we move on to creating a user in our own database
                this._registerCreateUserAndProfile(userData, profileData, profileType)
            }
        }
    },

    // method to register a user
    _registerCreateUserAndProfile: {
        value: function (userData, profileData, profileType) {
            APIManager.registerUser(userData)
                .then(r => r.json())
                .then(response => {
                    if (response.token) {
                        const token = response.token
                        localStorage.setItem("token", token)
                        APIManager.createItem(profileData, profileType)
                            .then(r => r.json())
                            .then(response => {
                                const userInformation = response.user
                                delete response.user
                                this.setUserAndProfileState(userInformation, response, profileType, token)
                                history.push('/')
                            })
                    } else {
                        APIManager.printErrors(response)
                    }

                })
        }
    },

    // method to get users token and pass it to get profile information method for setting it along with other user information into state
    login: {
        value: function (username, password) {
            const loginInfo = { username, password }
            APIManager.loginUser(loginInfo)
                .then(r => r.json())
                .then(response => {
                    if (response.token) {
                        const token = response.token
                        localStorage.setItem("token", token)
                        this.getProfileInformation(token)
                        this.getAssignments()
                        history.push('/')
                    } else {
                        APIManager.printErrors(response)
                    }
                })
        }
    },

    logout: {
        value: function () {
            this.clearUserInformation()
            this.routeTo('/')
        }
    },

    // method to get profile information for the user whos token we got from login or registration
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
                    if (profileType === "teacher") {
                        this.getTeachersLessons()
                        this.getTeachersDocuments()
                    } else if (profileType === "student") {
                        // future code for loading student specific information will be here
                    }
                })
        }
    },

    // method to update a property on a user
    updateUserProperty: {
        value: function (oldData, propertyToChange, newValue, stateKey) {
            let problems = false
            const data = { ...oldData }
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
                        if (propertyToChange === "username") {
                            this.getProfileInformation(localStorage.getItem("token"))
                        }
                    } else {
                        APIManager.printErrors(response)
                    }
                })
        }
    },

    connectStudentToTeacher: {
        value: function (connection_key) {
            console.log(connection_key)
            const data = {"connection_key": connection_key}
            APIManager.createItem(data, "connect")
                .then(r => r.json())
                .then(response => {
                    console.log(response)
                    if (response.error) {
                        this.popAlert(response.error)
                    } else {
                        this.popAlert("You are now connected!")
                    }
                })
        }
    },

    changePassword: {
        value: function (oldPassword, newPassword) {
            const dataToPost = {
                old_password: oldPassword,
                new_password: newPassword,
            }
            APIManager.createItem(dataToPost, "auth/change_password")
                .then(r => r.json())
                .then(response => {
                    this.alertObject(response)
                })
        }
    }


})

export default UserManager