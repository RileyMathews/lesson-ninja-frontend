import React, { Component } from 'react'

/*  
    module: edit user info component
    purpose: to display user information and allow user to edit if nessesary
    author: riley mathews
*/


class UserInfo extends Component {


    render() {
        return (
            <React.Fragment>
                <div id="user-info">
                    <h1>User Profile</h1>
                    <p>First name: {this.props.user.first_name} <span id="user__first_name" onClick={this.props.startEditingValue}>Edit</span></p>
                    <p>Last name: {this.props.user.last_name} <span id="user__last_name" onClick={this.props.startEditingValue}>Edit</span></p>
                    <p>Username: {this.props.user.username} <span id="user__username" onClick={this.props.startEditingValue}>Edit</span></p>
                    <p>Email: {this.props.user.email} <span id="user__email" onClick={this.props.startEditingValue}>Edit</span></p>
                </div>
            </React.Fragment>
        )
    }
}

export default UserInfo
