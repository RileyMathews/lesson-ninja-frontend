import React, { Component } from 'react'
import StudentAssignmentView from './StudentAssignmentView'
import {Context} from '../Provider'

/*  
    module: student home component
    author: riley mathews
    purpose: to be the entry point for a students home view
*/


class StudentHome extends Component {


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>Student Home Page</h1>
                        <StudentAssignmentView 
                            assignments = {context.state.assignments}
                            openAssignment = {context.openAssignment}
                        />
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default StudentHome
