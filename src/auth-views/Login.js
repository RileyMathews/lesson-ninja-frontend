import React, { Component } from 'react'
import { Context } from '../Provider';
import LoginForm from './LoginForm';

/*  
    module: login component
    author: riley mathews
    purpose: to be the entry point for login view
*/


class Login extends Component {


    render() {
        return (
            <React.Fragment>
                <Context.Consumer>
                    {context => (
                        <React.Fragment>

                            <LoginForm
                                login={context.login}
                            />

                        </React.Fragment>
                    )}
                </Context.Consumer>
            </React.Fragment>
        )
    }
}

export default Login
