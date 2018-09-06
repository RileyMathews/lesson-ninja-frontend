import React, { Component } from 'react'


class EditUserInfo extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>User Profile</h1>
                <p>First name: {this.props.user.first_name} <span id="first_name" onClick={this.props.startEditingValue}>Edit</span></p> 
                <p>Last name: {this.props.user.last_name} <span id="last_name" onClick={this.props.startEditingValue}>Edit</span></p> 
                <p>Username: {this.props.user.username} <span id="username" onClick={this.props.startEditingValue}>Edit</span></p> 
                <p>Email: {this.props.user.email} <span id="email" onClick={this.props.startEditingValue}>Edit</span></p>
            </React.Fragment>
        )
    }
}

export default EditUserInfo
