import React, { Component } from 'react'
import { Field, Label, Control, Input, Button } from 'bloomer'

/*  
    module: login form component
    author: riley mathews
    purpose: to generate the form and attached methods for logging the user in
*/


class LoginForm extends Component {

    // state of the component holds information from the form values
    state = {
        username: "",
        password: ""
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


    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitForm}>
                    <Field>
                        <Label>Username</Label>
                        <Control>
                            <Input required onChange={this.updateForm} name="username" type="text" placeholder='Username' value={this.state.username} />
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
            </React.Fragment>
        )
    }
}

export default LoginForm
