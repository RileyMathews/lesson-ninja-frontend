import React, { Component } from 'react'


class Student extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>Student: {this.props.student.user.first_name} {this.props.student.user.last_name}</h1>
            </React.Fragment>
        )
    }
}

export default Student
