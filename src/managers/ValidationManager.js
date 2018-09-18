/*  
    module: validation manager
    author: riley mathews
    purpose: to contain methods for validating data passed throughout the application
*/


const ValidationManager = Object.create(null, {

    // method to check usernames
    username: {
        value: function (username) {
            if (! /^[a-zA-Z0-9]+$/.test(username)) {
                alert("username must contain alpha numeric characters and no spaces")
                return false
            } else {
                return true
            }
        }
    }, 

    name: {
        value: function (name) {
            if (! /^[a-zA-Z0-9]+$/.test(name)) {
                alert("names must contain alpha numeric characters and no spaces")
                return false
            } else {
                return true
            }
        }
    }

})

export default ValidationManager