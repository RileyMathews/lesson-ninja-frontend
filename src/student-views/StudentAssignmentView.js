import React, { Component } from 'react'
import { Button } from 'bloomer/lib/elements/Button';
import AssignmentDetail from './AssignmentDetail';
import MediaComponent from '../display-components/MediaComponent'
import DropdownToggle from '../display-components/DropdownToggle'
import './StudentAssignmentView.css'

/*  
    module: student assignment view component
    author: riley mathews
    purpose: to generate the view of students assignments
*/


class StudentAssignmentView extends Component {

    state = {
        detail: false,
        assignmentId: 0,
        showHistory: false,
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
                        <div id="assignment-container">
                            {this.props.assignments.filter(assignment => assignment.finished_on === null).map(assignment => (
                                <MediaComponent
                                    key={assignment.id}
                                    title={assignment.lesson.name}
                                    mainCallback={() => this.setDetailView(assignment.id)}
                                    mainCallbackText="Detail"
                                />
                            ))}
                        </div>
                        <DropdownToggle
                            text="Show Completed Lessons"
                            active={this.state.showHistory}
                            callback={() => this.setState({ showHistory: !this.state.showHistory })}
                        />
                        {this.state.showHistory ?
                            <React.Fragment>
                                {this.props.assignments.filter(assignment => assignment.finished_on !== null).map(assignment => (
                                    <MediaComponent
                                        key={assignment.id}
                                        title={assignment.lesson.name}
                                        mainCallback={() => this.setDetailView(assignment.id)}
                                        mainCallbackText="Detail"
                                    />
                                ))}
                            </React.Fragment>
                            :
                            null
                        }
                    </React.Fragment>
                }

            </React.Fragment>
        )
    }
}

export default StudentAssignmentView
