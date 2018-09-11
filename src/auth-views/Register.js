import React, { Component } from 'react'
import RegisterForm from './RegisterForm';
import { Context } from '../Provider';

/*  
    module: register component
    author: riley mathews
    purpose: to be the entry point for the registration view
*/


class Register extends Component {


    render() {
        return (
                <Context.Consumer>
                    {context => (
                        <React.Fragment>

                            <RegisterForm 
                                startRegistration={context.startRegistration}
                            />

                        </React.Fragment>
                    )}
                </Context.Consumer>
                
        )
    }
}

export default Register
