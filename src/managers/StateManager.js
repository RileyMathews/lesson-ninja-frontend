import APIManager from "./APIManager";

/*  
    module: state manager
    author: riley mathews
    purpose: to hold methods that are in charge of setting state of data that is held in provider.js
*/

const StateManager = Object.create(null, {

    // method to accept a key and value and add that to providers state
    setProviderState: {
        value: function (key, value){
            this.setState({[key]: value}, () => {
                console.log("state set")
            })
        }
    },

    // method that takes in all information about a user and posts it to state
    setUserAndProfileState: {
        value: function (userData, profileData, profileType, token) {
            this.setState({
                user: userData,
                [profileType]: profileData,
                authToken: token
            })
        }
    },

    // method that adds an item to an array that is already in state
    addItemToState: {
        value: function(item, arrayKey) {
            const array = [...this.state[arrayKey]]
            array.push(item)
            this.setState({[arrayKey]: array}, () => {
                console.log("state set")
            })
        }
    },

    // method to clear all information from state upon logout
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
            }, () => {
                this.routeTo("/")
            })
        }
    },

    // method that takes a url string of a detail item, as well as key of were that item is in a state array
    // and updates that item in state with the new detail information from the api
    updateItemInStateArrayFromAPI: {
        value: function (url, stateKey) {
            APIManager.getAuthItem(url)
                .then(r => r.json())
                .then(itemObject => {
                    const stateArray = [...this.state[stateKey]]
                    const index = stateArray.findIndex(item => item.id === itemObject.id)
                    stateArray[index] = itemObject
                    this.setState({[stateKey]: stateArray})
                })
        }
    },

    // method that takes the url of an item in an array in state, and the key of that array, and removes the
    removeItemFromStateByUrl: {
        value: function (url, stateKey) {
            const stateArray = [...this.state[stateKey]]
            const index = stateArray.findIndex(item => item.url === url)
            stateArray.splice(index, 1)
            this.setState({[stateKey]: stateArray})
        }
    },

})

export default StateManager