import React, { Component } from 'react'
import { Field, Label, Input, Control, Select, Button } from 'bloomer'

/*  
    module: register form component
    author: riley mathews
    purpose: to create the form and attached methods for registering a new user
*/


class RegisterForm extends Component {

    // state of component to hold information from the form
    state = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password1: "",
        password2: "",
        is_teacher: true,
        is_student: false,
        connection_key: "",
        bio: "",
        street: "",
        city: "",
        region: "",
        country: "",
        zip_code: ""
    }

    // function to call to make sure information in the form matches what is expected from the user
    validateForm = () => {
        // check if passwodrs are the same
        if (this.state.password1 !== this.state.password2) {
            alert("your passwords do not match")
            return false
        }
        // check if somehow the user is registering as a teacher and a student which is currently not allowed
        // this should 'technically' only happen if the user wen't into something like the react dev tools and manually changed state bypassing the form
        if (this.state.is_student === this.state.is_teacher) {
            this.setState({
                is_student: false,
                is_teacher: true,
            })
            alert("sorry something wen't wrong. Try again")
            return false
        }
        return true
    }

    // method to update state from form value
    updateForm = (evt) => {
        const user = { ...this.state }
        user[evt.target.name] = evt.target.value
        this.setState(user)
    }

    // method to change the account type based on the dropdown select
    setAccountType = (evt) => {
        const user = { ...this.state }
        if (evt.target.value === "teacher") {
            user.is_teacher = true
            user.is_student = false
        } else if (evt.target.value === "student") {
            user.is_teacher = false
            user.is_student = true
        }
        this.setState(user)
    }

    // function to call when submitting the form
    submitForm = (evt) => {
        evt.preventDefault()

        // call function to make sure form is valid
        if (this.validateForm()) {
            // build user object
            const user = {
                username: this.state.username,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password1,
                is_teacher: this.state.is_teacher,
                is_student: this.state.is_student
            }
            // build teacher profile object
            const teacherProfile = {
                connection_key: this.state.connection_key,
                bio: this.state.bio,
                street: this.state.street,
                city: this.state.city,
                region: this.state.region,
                country: this.state.country,
                zip_code: this.state.zip_code,
            }
            // build student profile object
            // currently not applicable
            const studentProfile = {}

            // get value of profile type
            const profileType = this.state.is_student ? "student" : "teacher"
            // register user
            this.props.startRegistration(user, this.state.is_student ? studentProfile : teacherProfile, profileType)
        }

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
                        <Label>First Name</Label>
                        <Control>
                            <Input required onChange={this.updateForm} name="first_name" type="text" placeholder='First Name' value={this.state.first_name} />
                        </Control>
                    </Field>

                    <Field>
                        <Label>Last Name</Label>
                        <Control>
                            <Input required onChange={this.updateForm} name="last_name" type="text" placeholder='Last Name' value={this.state.last_name} />
                        </Control>
                    </Field>

                    <Field>
                        <Label>Email</Label>
                        <Control>
                            <Input required onChange={this.updateForm} name="email" type="email" placeholder='Email' value={this.state.email} />
                        </Control>
                    </Field>

                    <Field>
                        <Label>Password</Label>
                        <Control>
                            <Input required onChange={this.updateForm} name="password1" type="password" placeholder='password' value={this.state.password1} />
                        </Control>
                    </Field>

                    <Field>
                        <Label>Confirm Password</Label>
                        <Control>
                            <Input required onChange={this.updateForm} name="password2" type="password" placeholder='password' value={this.state.password2} />
                        </Control>
                    </Field>

                    <Field>
                        <Label>Account Type</Label>
                        <Control>
                            <Select onChange={this.setAccountType} name="account_type">
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </Select>
                        </Control>
                    </Field>

                    {/* following block of html is only rendered if the 'teacher' option is selected in the dropdown */}
                    {this.state.is_teacher ?
                        <React.Fragment>
                            <Field>
                                <Label>Passphrase</Label>
                                <span>This is what will be used to connect with your students.</span>
                                <Control>
                                    <Input required onChange={this.updateForm} name="connection_key" type="text" placeholder='passphrase' value={this.state.connection_key} />
                                </Control>
                            </Field>
                            <h1>None of the rest of these fields are required</h1>
                            <Field>
                                <Label>bio</Label>
                                <Control>
                                    <Input onChange={this.updateForm} name="bio" type="text" placeholder='bio' value={this.state.bio} />
                                </Control>
                            </Field>

                            <Field>
                                <Label>street</Label>
                                <Control>
                                    <Input onChange={this.updateForm} name="street" type="text" placeholder='street' value={this.state.street} />
                                </Control>
                            </Field>

                            <Field>
                                <Label>city</Label>
                                <Control>
                                    <Input onChange={this.updateForm} name="city" type="text" placeholder='city' value={this.state.city} />
                                </Control>
                            </Field>

                            <Field>
                                <Label>country</Label>
                                <Control>
                                    <Input onChange={this.updateForm} name="country" type="text" placeholder='country' value={this.state.country} />
                                </Control>
                            </Field>

                            <Field>
                                <Label>zip code</Label>
                                <Control>
                                    <Input onChange={this.updateForm} name="zip_code" type="text" placeholder='zip code' value={this.state.zip_code} />
                                </Control>
                            </Field>
                        </React.Fragment>
                        :
                        null
                    }

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

export default RegisterForm
