import React, { Component } from 'react'
import { Button } from 'bloomer/lib/elements/Button';
import AssignmentSnippet from './AssignmentSnippet';
import AssignmentDetail from './AssignmentDetail';

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
                <h1>Your Assignments</h1>
                {this.state.detail ?
                    <React.Fragment>
                        <AssignmentDetail
                            assignment={this.props.assignments.find(assignment => assignment.id === this.state.assignmentId)}
                            key={this.state.assignmentId}
                        />
                        <Button onClick={this.setListView}>Return</Button>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        {this.props.assignments.map(assignment => (
                                <AssignmentSnippet
                                    assignment={assignment}
                                    setDetailView={this.setDetailView}
                                    key={assignment.id}
                                />
                        ))}
                    </React.Fragment>
                }

            </React.Fragment>
        )
    }
}

export default StudentAssignmentView
