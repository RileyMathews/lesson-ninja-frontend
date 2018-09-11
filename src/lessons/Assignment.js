import React, { Component } from 'react'
import StudentAssignment from './StudentAssignment';


class Assignment extends Component {


    render() {
        return (
            <React.Fragment>
                {this.props.students.map(student => (
                    <StudentAssignment key={student.id}
                        student={student}
                        lesson={this.props.lesson}
                        assignLesson={this.props.assignLesson}
                        isStudentOnLesson={this.props.isStudentOnLesson}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default Assignment
