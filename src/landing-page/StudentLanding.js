import React, { Component } from 'react'


class StudentLanding extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>Welcome Student</h1>
                <p>your assignments</p>
                {this.props.assignments.map(assignment => (
                    <p key={assignment.id}>{assignment.lesson.name}</p>
                ))}
            </React.Fragment>
        )
    }
}

export default StudentLanding
