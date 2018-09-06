/*  
    module: api manager
    author: riley mathews
    purpose: to handel the definition and returning of all calls made to apis in the application
*/

const url = "http://127.0.0.1:8000/"

const APIManager = Object.create(null, {

    // method to register a new user
    registerUser: {
        value: function (data) {
            return fetch(`${url}auth/register/`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            })
        }
    },

    loginUser: {
        value: function (data) {
            return fetch(`${url}auth/login/`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            })
        }
    },

    getAuthCollection: {
        value: function (collection, query) {
            return fetch(`${url}${collection}/?${query}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("token")}`
                }
            })
        }
    },

    // method to create users profile
    createProfile: {
        value: function (data, profileType) {
            return fetch(`${url}${profileType}/`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("token")}`
                }
            })
        }
    }, 

    updateAuthItem: {
        value: function (itemUrl, data) {
            return fetch(`${itemUrl}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("token")}`
                }
            })
        }
    }

})

export default APIManager