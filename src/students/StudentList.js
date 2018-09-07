import React, { Component } from 'react'
import Student from './Student';


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
