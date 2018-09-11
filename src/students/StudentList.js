import React, { Component } from 'react'
import Student from './Student';

/*  
    module: student list component
    author: riley mathews
    purpose: to display a list of students 
*/

class StudentList extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>Student List</h1>
                {this.props.students.map(student => (
                    <Student
                        key={student.id}
                        student={student}
                        setDetailView={this.props.setDetailView}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default StudentList
