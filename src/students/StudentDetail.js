import React, { Component } from 'react'
import { Button } from 'bloomer/lib/elements/Button';


class StudentDetail extends Component {


    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.setListView}>Return To Students</Button>
                <h1>Student</h1>
                <p>name: {this.props.student.user.first_name} {this.props.student.user.last_name}</p>
                <p>username: {this.props.student.user.username}</p>
                <p>email: {this.props.student.user.email}</p>
            </React.Fragment>
        )
    }
}

export default StudentDetail
