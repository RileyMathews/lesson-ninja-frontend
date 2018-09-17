import React, { Component } from 'react'
import { Field, Label, Control, Input, Button } from 'bloomer'
import DropdownToggle from '../display-components/DropdownToggle'

/*  
    module: login form component
    author: riley mathews
    purpose: to generate the form and attached methods for logging the user in
*/


class LoginForm extends Component {

    // state of the component holds information from the form values
    state = {
        username: "",
        password: "",
        //email only used for password reset, not needed for login
        email: "",
        showReset: false,
    }

    // function to update the form and pass its value to state
    updateForm = (evt) => {
        const user = { ...this.state }
        user[evt.target.name] = evt.target.value
        this.setState(user)
    }

    // function to call when the form is submitted
    submitForm = (evt) => {
        evt.preventDefault()
        this.props.login(this.state.username, this.state.password)
    }

    // function to start reset password process
    resetPassword = (evt) => {
        evt.preventDefault()
        this.props.startResetPassword(this.state.email)
    }

    // will focus the input field on loading the form
    componentDidMount() {
        document.getElementById("login_username").focus()
    }


    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitForm}>
                    <Field>
                        <Label>Username</Label>
                        <Control>
                            <Input required onChange={this.updateForm} id="login_username" name="username" type="text" placeholder='Username' value={this.state.username} />
                        </Control>
                    </Field>

                    <Field>
                        <Label>Password</Label>
                        <Control>
                            <Input required onChange={this.updateForm} name="password" type="password" placeholder='First Name' value={this.state.password} />
                        </Control>
                    </Field>

                    <Field>
                        <Control>
                            <Button type="submit" isColor='primary'>Submit</Button>
                        </Control>
                    </Field>
                </form>

                <DropdownToggle
                    text="Forgot Password?"
                    active={this.state.showReset}
                    callback={() => this.setState({ showReset: !this.state.showReset })}
                />
                {this.state.showReset ?
                    <form onSubmit={this.resetPassword}>
                        <Field>
                            <Label>Email</Label>
                            <Control>
                                <Input required onChange={this.updateForm} name="email" type="text" placeholder='email@website.com' value={this.state.email} />
                            </Control>
                        </Field>

                        <Field>
                            <Control>
                                <Button type="submit" isColor='primary'>Submit</Button>
                            </Control>
                        </Field>
                    </form>
                    :
                    null
                }
            </React.Fragment>
        )
    }
}

export default LoginForm
