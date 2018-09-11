import React, { Component } from 'react'
import LessonSnippet from '../lessons/LessonSnippet'
import Lesson from '../lessons/Lesson'
import { Button } from 'bloomer/lib/elements/Button';

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
                        <Lesson
                            lesson={this.props.assignments.find(assignment => assignment.id === this.state.assignmentId).lesson}
                        />
                        <Button onClick={this.setListView}>Return</Button>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        {this.props.assignments.map(assignment => (
                            <React.Fragment>
                                <LessonSnippet
                                    lesson={assignment.lesson}
                                />
                                <Button onClick={() => this.setDetailView(assignment.id)}>Detail</Button>
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                }

            </React.Fragment>
        )
    }
}

export default StudentAssignmentView
