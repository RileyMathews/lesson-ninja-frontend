import React, { Component } from 'react'
import Banner from '../display-components/Banner'

/*  
    module: teacher landing component
    author: riley mathews
    purpose: to be the entry point for teachers home page
*/


class TeacherLanding extends Component {


    render() {
        return (
            <React.Fragment>
                <Banner 
                    title={`Welcome ${this.props.teacher.first_name}`}
                    text={"Time for teaching."}
                />
            </React.Fragment>
        )
    }
}

export default TeacherLanding
