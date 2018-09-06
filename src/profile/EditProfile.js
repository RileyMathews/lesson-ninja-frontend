import React, { Component } from 'react'
import EditUserInfo from './EditUserInfo';
import EditStudentInfo from './EditStudentInfo';
import EditTeacherInfo from './EditTeacherInfo';
import ProfileEditField from './ProfileEditField';


class EditProfile extends Component {

    state = {
        editing: false,
        editingProperty: "",
        editingValue: "",
        editingLocation: "",
    }

    updateEditValue = (evt) => {
        let oldValue = { ...this.state.editingValue }
        oldValue = evt.target.value
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
            <React.Fragment>
                <h1>Profile</h1>
                <EditUserInfo
                    user={this.props.context.state.user}
                    startEditingValue={this.startEditingValue}
                />
                {this.props.context.state.user.is_student ?
                    <EditStudentInfo
                        student={this.props.context.state.student}
                    />
                    :
                    <EditTeacherInfo
                        teacher={this.props.context.state.teacher}
                        startEditingValue={this.startEditingValue}
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
            </React.Fragment>
        )
    }
}

export default EditProfile
