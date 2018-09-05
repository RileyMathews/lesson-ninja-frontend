import React, { Component } from 'react'
import RegisterForm from './RegisterForm';
import { Context } from '../Provider';


class Register extends Component {


    render() {
        return (
                <Context.Consumer>
                    {context => (
                        <React.Fragment>

                            <RegisterForm 
                                register={context.register}
                            />

                        </React.Fragment>
                    )}
                </Context.Consumer>
                
        )
    }
}

export default Register
