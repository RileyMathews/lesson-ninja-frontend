import React, { Component } from 'react'
import MediaComponent from '../display-components/MediaComponent';

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
                    <MediaComponent 
                        key={student.id}
                        title={`${student.user.first_name} ${student.user.last_name}`}
                        subtitle={`${student.user.username}`}
                        mainCallback={() => this.props.setDetailView(student.id)}
                        mainCallbackText={"Detail"}
                        deleteCallback={() => this.props.removeStudentFromTeacher(student)}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default StudentList
