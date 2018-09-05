import React, { Component } from 'react'
import { Field, Label, Input, Control, Select, Button } from 'bloomer'


class RegisterForm extends Component {

    state = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password1: "",
        password2: "",
        is_teacher: true,
        is_student: false,
        bio: "",
        street: "",
        city: "",
        region: "",
        country: "",
        zip_code: ""
    }

    validateForm = () => {
        if (this.state.password1 !== this.state.password2) {
            alert("your passwords do not match")
            return false
        }
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

    updateForm = (evt) => {
        const user = Object.assign({}, this.state)
        user[evt.target.name] = evt.target.value
        this.setState(user)
    }

    setAccountType = (evt) => {
        console.log(evt)
        const user = Object.assign({}, this.state)
        if (evt.target.value === "teacher") {
            user.is_teacher = true
            user.is_student = false
        } else if (evt.target.value === "student") {
            user.is_teacher = false
            user.is_student = true
        }
        this.setState(user)
    }

    submitForm = (evt) => {
        evt.preventDefault()

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
                bio: this.state.bio,
                street: this.state.street,
                city: this.state.city,
                region: this.state.region,
                country: this.state.country,
                zip_code: this.state.zip_code === "" ? null : parseInt(this.state.zip_code, 10)
            }
            // build student profile object
            const studentProfile = {}
            // current not applicable
    
            // get value of profile type
            const profileType = this.state.is_student ? "student" : "teacher"
            // register user
            this.props.register(user, this.state.is_student ? studentProfile : teacherProfile, profileType)
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

                    {this.state.is_teacher ?
                        <React.Fragment>
                            <h1>None of these fields are required to register</h1>
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
