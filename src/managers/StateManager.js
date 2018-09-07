/*  
    module: state manager
    author: riley mathews
    purpose: to hold methods that are in charge of setting state of data that is held in provider.js
*/

const StateManager = Object.create(null, {

    setProviderState: {
        value: function (key, value){
            this.setState({[key]: value})
        }
    },

    setUserAndProfileState: {
        value: function (userData, profileData, profileType, token) {
            this.setState({
                user: userData,
                [profileType]: profileData,
                authToken: token
            })
        }
    },

    addItemToState: {
        value: function(item, arrayKey) {
            const array = [...this.state[arrayKey]]
            array.push(item)
            this.setState({[arrayKey]: array})
        }
    },

    clearUserInformation: {
        value: function () {
            localStorage.removeItem("token")
            this.setState({
                user: {
                    username: "",
                    email: "",
                    first_name: "",
                    last_name: "",
                    url: "",
                },
                authToken: "",
                teacher: {
                    bio: "",
                    street: "",
                    city: "",
                    region: "",
                    country: "",
                    zip_code: null,
                    url: ""
                },
                student: {
                    url: ""
                }
            })
        }
    }

})

export default StateManager