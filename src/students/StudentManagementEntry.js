import React, { Component } from 'react'
import SearchStudents from './SearchStudents';
import StudentList from './StudentList';
import { Context } from '../Provider';


class StudentManagementEntry extends Component {

    state = {
        searching: false,
        detail: false,
        list: true,

    }


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>my students</h1>
                        <SearchStudents />
                        {this.state.list ?
                            <StudentList 
                                students = {context.state.teacher.students}
                            />
                            :
                            null
                        }
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default StudentManagementEntry
