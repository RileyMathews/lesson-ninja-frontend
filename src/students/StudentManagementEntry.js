import React, { Component } from 'react'
import SearchStudents from './SearchStudents';


class StudentManagementEntry extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>my students</h1>
                <SearchStudents />
            </React.Fragment>
        )
    }
}

export default StudentManagementEntry
