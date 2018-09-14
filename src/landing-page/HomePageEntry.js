import React, { Component } from 'react'
import { Context } from '../Provider'
import StudentLanding from './StudentLanding'
import TeacherLanding from './TeacherLanding'
import GenericLanding from './GenericLanding'

/*  
    module: home page entry component
    author: riley mathews
    purpose: to be the home page entry point that users see if they are authenticated
*/


class HomePageEntry extends Component {


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        {/* if the user is a student show them the student landing component */}
                        {context.state.user.is_student ? <StudentLanding student={context.state.user} assignments={context.state.assignments}/> : null}
                        {/* if the user is a teacher show the teacher landing page */}
                        {context.state.user.is_teacher ? <TeacherLanding teacher={context.state.user}/> : null}
                        {context.state.authToken === "" ? <GenericLanding /> : null}
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default HomePageEntry
