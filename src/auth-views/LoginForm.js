import React, { Component } from 'react'
import {Field, Label, Control, Input, Button} from 'bloomer'


class LoginForm extends Component {

    state = {
        username: "",
        password: ""
    }

    updateForm = (evt) => {
        const user = Object.assign({}, this.state)
        user[evt.target.name] = evt.target.value
        this.setState(user)
    }

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
