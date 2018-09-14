/*  
    module: api manager
    author: riley mathews
    purpose: to handel the definition and returning of all calls made to apis in the application
*/

// const url = "http://127.0.0.1:8000/"
// const url = "http://142.93.23.116/"

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/' : 'https://api.lesson.ninja/'

const APIManager = Object.create(null, {

    // method to print out error messages from api
    printErrors: {
        value: function(err) {
            let string = ""
            for (var key in err) {
                string += `${key}: ${err[key]}`
            }
            alert(string)
        }
    },

    // method to register a new user
    registerUser: {
        value: function (data) {
            return fetch(`${baseUrl}auth/register/`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            })
        }
    },

    // method to login a user
    loginUser: {
        value: function (data) {
            return fetch(`${baseUrl}auth/login/`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            })
        }
    },

    // method to get all of a collection that requires authentication with optional queries
    getAuthCollection: {
        value: function (collection, query) {
            return fetch(`${baseUrl}${collection}/?${query}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("token")}`
                }
            })
        }
    },

    // method to get a single item that requires authentication
    getAuthItem: {
        value: function (itemUrl) {
            return fetch(`${itemUrl}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("token")}`
                }
            })
        }
    }, 

    // method to create users profile
    createItem: {
        value: function (data, collection) {
            return fetch(`${baseUrl}${collection}/`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("token")}`
                }
            })
        }
    }, 

    // method to update an item that requires authentication
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
    },

    deleteAuthItem: {
        value: function (itemUrl) {
            return fetch(`${itemUrl}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("token")}`
                }
            })
        }
    },

    // method to search through the students
    searchStudents: {
        value: function (query) {
            return fetch(`${baseUrl}student/?username=${query}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("token")}`
                }
            })
        }
    },


})

export default APIManager