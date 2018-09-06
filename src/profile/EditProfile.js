import React, { Component } from 'react'
import EditUserInfo from './EditUserInfo';
import { Context } from '../Provider';
import EditStudentInfo from './EditStudentInfo';
import EditTeacherInfo from './EditTeacherInfo';
import ProfileEditField from './ProfileEditField';


class EditProfile extends Component {

    state = {
        editing: false,
        editingProperty: "",
        editingValue: "",
    }

    updateEditValue = (evt) => {
        let oldValue = { ...this.state.editingValue }
        oldValue = evt.target.value
        this.setState({ editingValue: oldValue })
    }

    startEditingValue = (evt) => {
        this.setState({
            editing: true,
            editingProperty: evt.target.id,
            editingValue: "",
        })
    }

    submitEdit = (evt) => {
        if (evt.target.id === "submit") {
            this.props.updateUserProperty(this.state.editingProperty, this.state.editingValue)
        }
        this.setState({
            editing: false,
            editingProperty: "",
            editingValue: "",
        })
    }

    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>Profile</h1>
                        <EditUserInfo
                            user={context.state.user}
                            startEditingValue={this.startEditingValue}
                        />
                        {context.state.user.is_student ?
                            <EditStudentInfo
                                student={context.state.student}
                            />
                            :
                            <EditTeacherInfo
                                teacher={context.state.teacher}
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
                )}
            </Context.Consumer>
        )
    }
}

export default EditProfile
