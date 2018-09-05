import React, { Component } from 'react'
import { Context } from '../Provider';
import LoginForm from './LoginForm';


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
