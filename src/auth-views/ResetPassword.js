import React, { Component } from 'react'
import { Context } from '../Provider';
import {Field, Label, Control, Input, Button} from 'bloomer'


class ResetPassword extends Component {

    state = {
        email: "",
        code: "",
        password1: "",
        password2: ""
    }

    updateState = (evt) => {
        const state = {...this.state}
        state[evt.target.name] = evt.target.value
        this.setState(state)
    }


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <form onSubmit={(evt) => {
                            evt.preventDefault()
                            if (this.state.password1 === this.state.password2) {
                                context.resetPassword(this.state.email, this.state.code, this.state.password1)
                            } else {
                                alert("passwords must match")
                            }
                        }}>
                            <Field>
                                <Label>Email</Label>
                                <Control>
                                    <Input required onChange={this.updateState} name="email" type="text" placeholder='email@website.com' value={this.state.email} />
                                </Control>
                            </Field>

                            <Field>
                                <Label>code</Label>
                                <Control>
                                    <Input required onChange={this.updateState} name="code" type="text" placeholder='code' value={this.state.code} />
                                </Control>
                            </Field>

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
                                <Control>
                                    <Button type="submit">Submit</Button>
                                </Control>
                            </Field>
                        </form>
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default ResetPassword
