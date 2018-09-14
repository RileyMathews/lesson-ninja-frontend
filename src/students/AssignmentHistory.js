import React, { Component } from 'react'
import DropdownBox from '../display-components/DropdownBox';


class AssignmentHistory extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>Past Assignments</h1>
                {this.props.assignments.filter(assignment => assignment.finished_on !== null).map(assignment => (
                    <div className="dropdown-container">
                        <DropdownBox
                            key={assignment.id}
                            text={`${assignment.lesson.name} completed on ${assignment.finished_on}`}
                        />
                    </div>
                ))}
            </React.Fragment>
        )
    }
}

export default AssignmentHistory
