import React, { Component } from 'react'
import StudentHome from '../student-views/StudentHome';

/*  
    module: student landing component
    author: riley mathews
    purpose: to be the entry point for the home page if a student is logged in
*/


class StudentLanding extends Component {


    render() {
        return (
            <React.Fragment>
                <StudentHome />
            </React.Fragment>
        )
    }
}

export default StudentLanding
