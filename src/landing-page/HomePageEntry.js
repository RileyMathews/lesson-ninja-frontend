import React, { Component } from 'react'
import { Context } from '../Provider'
import StudentLanding from './StudentLanding';

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
                        <h1>Welcome to Lesson Ninja!</h1>
                        {/* if the user is a student show them the student landing component */}
                        {context.state.user.is_student ? <StudentLanding assignments={context.state.assignments}/> : null}
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default HomePageEntry
