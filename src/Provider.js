import React, { Component } from 'react'
import UserManager from './managers/UserManager'

/*
    module: context provider
    author: riley mathews
    purpose: to hold state at a top level in the application and pass that down to any component that would need to use it
*/

export const Context = React.createContext()

export class Provider extends Component {


    // The initial state of the data provider should include
    // default values for any top-level component that will
    // need the data. In this case, PoliticianList is my only
    // top-level component. It is not a child of any other
    // component.

    state = {
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
    }

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.getProfileInformation(localStorage.getItem("token"))
        }
    }

    /*  
        import methods from manager objects to be called and bound in this component
    */

    // user manager methods

    register = UserManager.register.bind(this)
    setUserState = UserManager.setUserState.bind(this)
    login = UserManager.login.bind(this)
    getProfileInformation = UserManager.getProfileInformation.bind(this)
    clearUserInformation = UserManager.clearUserInformation.bind(this)


    /*
        This component will not render any DOM element itself.
        Rather it becomes a virtual wrapper around any component
        that wants to serve as the data provider for its children.
    */
    render() {
        return (
            <Context.Provider value={{
                // pass state
                state: this.state,

                // manager methods
                register: this.register,
                login: this.login,
                clearUserInformation: this.clearUserInformation,

            }}>
                {this.props.children}
            </Context.Provider>

        )
    }
}
