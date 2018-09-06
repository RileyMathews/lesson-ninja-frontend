import React, { Component } from 'react'


class UserInfo extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>User Profile</h1>
                <p>Name: {this.props.user.first_name} {this.props.user.last_name}</p>
                <p>Username: {this.props.user.username}</p>
                <p>Email: {this.props.user.email}</p>
            </React.Fragment>
        )
    }
}

export default UserInfo
