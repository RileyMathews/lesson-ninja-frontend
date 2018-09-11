import React, { Component } from 'react'


class StudentAssignment extends Component {


    render() {
        return (
            <React.Fragment>
                <p>{this.props.assignment.lesson.name}</p>
                <p>student has {this.props.assignment.has_opened ? null : "not"} viewed this assignment</p>
            </React.Fragment>
        )
    }
}

export default StudentAssignment
