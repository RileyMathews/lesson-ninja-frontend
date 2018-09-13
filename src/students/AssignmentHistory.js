import React, { Component } from 'react'
import CompletedAssignment from './CompletedAssignment';


class AssignmentHistory extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>Past Assignments</h1>
                {this.props.assignments.filter(assignment => assignment.finished_on !== null).map(assignment => (
                    <CompletedAssignment 
                        assignment={assignment}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default AssignmentHistory
