import React, { Component } from 'react'
import TextAndEdit from '../display-components/TextAndEdit';
import DropdownToggle from '../display-components/DropdownToggle';
import PasswordResetForm from './PasswordResetForm';

/*  
    module: edit user info component
    purpose: to display user information and allow user to edit if nessesary
    author: riley mathews
*/
import ValidationManager from '../managers/ValidationManager'

class UserInfo extends Component {

    state = {
        showPasswordForm: false,
    }


    render() {
        return (
            <React.Fragment>
                <div id="user-info" className="profile-block">
                    <h1>User Profile</h1>
                    <TextAndEdit
                        text={this.props.user.first_name}
                        keyText={"First name"}
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.user, "first_name", newValue, "user")}
                        validationCallback={(value) => ValidationManager.name(value)}
                    />
                    <TextAndEdit
                        text={this.props.user.last_name}
                        keyText={"Last name"}
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.user, "last_name", newValue, "user")}
                        validationCallback={(value) => ValidationManager.name(value)}
                    />
                    <TextAndEdit
                        text={this.props.user.username}
                        keyText={"username"}
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.user, "username", newValue, "user")}
                        validationCallback={(value) => ValidationManager.username(value)}
                    />
                    <TextAndEdit
                        text={this.props.user.email}
                        keyText={"email"}
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.user, "email", newValue, "user")}
                    />
                    <DropdownToggle
                        text="Change Password"
                        active={this.state.showPasswordForm}
                        callback={() => this.setState({ showPasswordForm: !this.state.showPasswordForm })}
                    />
                    {this.state.showPasswordForm ?
                        <PasswordResetForm 
                            changePassword={this.props.changePassword}
                            cancelEdit={() => this.setState({showPasswordForm: false})}
                        />
                        :
                        null
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default UserInfo
