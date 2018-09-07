import React, { Component } from 'react'
import StudentAssignmentView from './StudentAssignmentView'
import {Context} from '../Provider'


class StudentHome extends Component {


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>Student Home Page</h1>
                        <StudentAssignmentView 
                            assignments = {context.state.assignments}
                        />
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default StudentHome
