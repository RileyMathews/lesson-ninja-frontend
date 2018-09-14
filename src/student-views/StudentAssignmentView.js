import React, { Component } from 'react'
import { Button } from 'bloomer/lib/elements/Button';
import AssignmentDetail from './AssignmentDetail';
import MediaComponent from '../display-components/MediaComponent'

/*  
    module: student assignment view component
    author: riley mathews
    purpose: to generate the view of students assignments
*/


class StudentAssignmentView extends Component {

    state = {
        detail: false,
        assignmentId: 0,
    }

    setDetailView = (id) => {
        this.setState({
            detail: true,
            assignmentId: id
        })
    }

    setListView = () => {
        this.setState({
            detail: false
        })
    }


    render() {
        return (
            <React.Fragment>
                {this.state.detail ?
                    <React.Fragment>
                        <Button onClick={this.setListView}>Return</Button>
                        <AssignmentDetail
                            assignment={this.props.assignments.find(assignment => assignment.id === this.state.assignmentId)}
                            key={this.state.assignmentId}
                            openAssignment={this.props.openAssignment}
                        />
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <h1>Your assignments</h1>
                        {this.props.assignments.map(assignment => (
                            <MediaComponent
                                key={assignment.id}
                                title={assignment.lesson.name}
                                mainCallback={() => this.setDetailView(assignment.id)}
                                mainCallbackText="Detail"
                            />
                        ))}
                    </React.Fragment>
                }

            </React.Fragment>
        )
    }
}

export default StudentAssignmentView
