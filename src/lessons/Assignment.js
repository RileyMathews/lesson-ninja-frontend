import React, { Component } from 'react'
import StudentAssignment from './StudentAssignment';
import { Input } from 'bloomer'
import PotentialAssignment from './PotentialAssignment';


class Assignment extends Component {


    render() {
        console.log("assignment component rendered", this.props.assignments)
        return (
            <React.Fragment>
                <Input type="text" name="search" placeholder="search" />
                {this.props.students.map(student => (
                    <React.Fragment key={`frag__${student.id}`}>
                        {this.props.isStudentOnLesson(this.props.lesson, student) ?
                            <StudentAssignment 
                                key={student.id}
                                student={student}
                                lesson={this.props.lesson}
                                assignment={this.props.findAssignment(this.props.lesson.url, student.url)}
                                cancelAssignment={this.props.cancelAssignment}
                                completeAssignment={this.props.completeAssignment}
                            />
                            :
                            <PotentialAssignment 
                                key={student.id}
                                student={student}
                                lesson={this.props.lesson}
                                assignLesson={this.props.assignLesson}
                            />
                    }
                    </React.Fragment> 
                    
                ))}
            </React.Fragment>
        )
    }
}

export default Assignment
