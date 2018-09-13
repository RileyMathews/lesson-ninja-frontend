import React, { Component } from 'react'
import { Button } from 'bloomer/lib/elements/Button';
import StudentAssignment from './StudentAssignment';
import './StudentDetail.css'
import UnassignedLessons from './UnassignedLessons';
import AssignmentHistory from './AssignmentHistory';
import DropdownToggle from '../display-components/DropdownToggle';
import Banner from '../display-components/Banner';

/*  
    module: student detail component
    author: riley mathews
    purpose: to be the component that shows details about a student
*/


class StudentDetail extends Component {

    state = {
        showLessons: false,
        showAssignmentHistory: false,
    }


    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.setListView}>Return To Students</Button>
                <Banner 
                    title={`${this.props.student.user.first_name} ${this.props.student.user.last_name}`}
                    text={`${this.props.student.user.username} ${this.props.student.user.email}`}
                />
                <p>Assignments: </p>
                <div className="student_assignment-container">
                    {this.props.getStudentsAssignments(this.props.student.url).filter(assignment => assignment.finished_on === null).map(assignment => (
                        <StudentAssignment
                            key={assignment.id}
                            assignment={assignment}
                            completeAssignment={this.props.completeAssignment}
                            cancelAssignment={this.props.cancelAssignment}
                            student={this.props.student}
                        />
                    ))}
                </div>
                
                <DropdownToggle callback={() => this.setState({ showLessons: !this.state.showLessons })} active={this.state.showLessons} text={"show lessons"}/>
                {this.state.showLessons ?
                    <UnassignedLessons
                        student={this.props.student}
                        lessons={this.props.lessons}
                        isStudentOnLesson={this.props.isStudentOnLesson}
                        assignLesson={this.props.assignLesson}
                    />
                    :
                    null
                }

                <DropdownToggle callback={() => this.setState({ showAssignmentHistory: !this.state.showAssignmentHistory})} active={this.state.showAssignmentHistory} text={"assignment history"}/>
                {this.state.showAssignmentHistory ?
                    <AssignmentHistory
                        student={this.props.student}
                        assignments={this.props.getStudentsAssignments(this.props.student.url)}
                    />
                    :
                    null
                }
            </React.Fragment>
        )
    }
}

export default StudentDetail
