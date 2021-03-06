import React, { Component } from 'react'
import UserInfo from './UserInfo';
import StudentInfo from './StudentInfo';
import TeacherInfo from './TeacherInfo';
import ProfileEditField from './ProfileEditField';
import './Profile.css'

/*  
    module: edit profile component
    author: riley mathews
    purpose: to generate fields and functionality allowing the user to edit their profile
*/


class Profile extends Component {

    state = {
        editing: false,
        editingProperty: "",
        editingValue: "",
        editingLocation: "",
    }

    updateEditValue = (evt) => {
        let oldValue = { ...this.state.editingValue }
        oldValue = this.state.editingProperty === "zip_code" ? parseInt(evt.target.value, 10) : evt.target.value
        this.setState({ editingValue: oldValue })
    }

    startEditingValue = (evt) => {
        this.setState({
            editing: true,
            editingProperty: evt.target.id.split("__")[1],
            editingLocation: evt.target.id.split("__")[0],
            editingValue: "",
        }, () => {
            document.getElementById("profile_edit_field").focus()
        })

    }

    submitEdit = (evt) => {
        const thingToChange = this.props.context.state[this.state.editingLocation]

        if (evt.target.id === "submit") {
            this.props.context.updateUserProperty(thingToChange, this.state.editingProperty, this.state.editingValue, this.state.editingLocation)
        }
        this.setState({
            editing: false,
            editingProperty: "",
            editingValue: "",
        })
    }

    render() {
        return (
            <div id="profile">
                <h1>Edit your profile info</h1>
                <UserInfo
                    user={this.props.context.state.user}
                    startEditingValue={this.startEditingValue}
                    updateUserProperty={this.props.context.updateUserProperty}
                    changePassword={this.props.context.changePassword}
                />
                {this.props.context.state.user.is_student ?
                    <StudentInfo
                        student={this.props.context.state.student}
                        updateUserProperty={this.props.context.updateUserProperty}
                    />
                    :
                    <TeacherInfo
                        teacher={this.props.context.state.teacher}
                        startEditingValue={this.startEditingValue}
                        updateUserProperty={this.props.context.updateUserProperty}
                    />
                }
                {this.state.editing ?
                    <ProfileEditField
                        property={this.state.editingProperty}
                        value={this.state.editingValue}
                        updateEditValue={this.updateEditValue}
                        submitEdit={this.submitEdit}
                    />
                    :
                    null
                }
            </div>
        )
    }
}

export default Profile
