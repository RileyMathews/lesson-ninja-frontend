import React, { Component } from 'react'
import StudentHome from '../student-views/StudentHome';
import Banner from '../display-components/Banner';

/*  
    module: student landing component
    author: riley mathews
    purpose: to be the entry point for the home page if a student is logged in
*/


class StudentLanding extends Component {


    render() {
        return (
            <React.Fragment>
                <Banner 
                    title={`Welcome ${this.props.student.first_name}`}
                    text="Time for learning"
                />
                <StudentHome />
            </React.Fragment>
        )
    }
}

export default StudentLanding
