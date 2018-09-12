import React, { Component } from 'react'
import StudentAssignment from './StudentAssignment';
import {Input} from 'bloomer'


class Assignment extends Component {


    render() {
        return (
            <React.Fragment>
                <Input type="text" name="search" placeholder="search"/>
                {this.props.students.map(student => (
                    <StudentAssignment key={student.id}
                        student={student}
                        lesson={this.props.lesson}
                        assignLesson={this.props.assignLesson}
                        cancelAssignment={this.props.cancelAssignment}
                        onLesson={this.props.isStudentOnLesson(this.props.lesson, student)}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default Assignment
