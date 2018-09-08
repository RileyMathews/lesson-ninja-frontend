import React, { Component } from 'react'
import { Context } from '../Provider'
import StudentLanding from './StudentLanding';
import UploadTest from './UploadTest';


class HomePageEntry extends Component {


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>Welcome to Lesson Ninja!</h1>
                        {context.state.user.is_student ? <StudentLanding assignments={context.state.assignments}/> : null}
                        <UploadTest />
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default HomePageEntry
