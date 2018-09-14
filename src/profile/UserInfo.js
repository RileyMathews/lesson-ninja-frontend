import React, { Component } from 'react'
import TextAndEdit from '../display-components/TextAndEdit';

/*  
    module: edit user info component
    purpose: to display user information and allow user to edit if nessesary
    author: riley mathews
*/


class UserInfo extends Component {


    render() {
        return (
            <React.Fragment>
                <div id="user-info" className="profile-block">
                    <h1>User Profile</h1>
                    <TextAndEdit
                        text={this.props.user.first_name}
                        keyText={"First name"}
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.user, "first_name", newValue, "user")}
                    />
                    <TextAndEdit
                        text={this.props.user.last_name}
                        keyText={"Last name"}
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.user, "last_name", newValue, "user")}
                    />
                    <TextAndEdit
                        text={this.props.user.username}
                        keyText={"username"}
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.user, "username", newValue, "user")}
                    />
                    <TextAndEdit
                        text={this.props.user.email}
                        keyText={"email"}
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.user, "email", newValue, "user")}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default UserInfo
