import React, { Component } from 'react'
import {Field, Label, Control, Input, Button} from 'bloomer'


class PasswordResetForm extends Component {

    state = {
        password1: "",
        password2: "",
        newPassword: "",
    }

    updateState = (evt) => {
        const state = { ...this.state }
        state[evt.target.name] = evt.target.value
        this.setState(state)
    }

    submitForm = (evt) => {
        evt.preventDefault()
        console.log(this.state)
        if (this.state.password1 === this.state.password2) {
            this.props.changePassword(this.state.password1, this.state.newPassword)
            this.props.cancelEdit()
        } else {
            alert("passwords must match")
        }
    }


    render() {
        return (
            <React.Fragment>
                <h1>password reset</h1>
                <form onSubmit={this.submitForm}>
                    <Field>
                        <Label>Password</Label>
                        <Control>
                            <Input required onChange={this.updateState} name="password1" type="password" placeholder='password' value={this.state.password1} />
                        </Control>
                    </Field>

                    <Field>
                        <Label>Confirm Password</Label>
                        <Control>
                            <Input required onChange={this.updateState} name="password2" type="password" placeholder='password' value={this.state.password2} />
                        </Control>
                    </Field>

                    <Field>
                        <Label>New Password</Label>
                        <Control>
                            <Input required onChange={this.updateState} name="newPassword" type="password" placeholder='password' value={this.state.newPassword} />
                        </Control>
                    </Field>

                    <Button type="submit">Change</Button>
                </form>
            </React.Fragment>
        )
    }
}

export default PasswordResetForm
