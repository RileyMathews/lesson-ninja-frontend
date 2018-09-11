import React, { Component } from 'react'
import { Context } from '../Provider';
import LessonCreateForm from './LessonCreateForm';
import LessonView from './LessonView';
import LessonNav from './LessonNav';

/*  
    module: lesson entry component
    author: riley mathews
    purpose: to be the entry point for lesson view
*/


class LessonEntry extends Component {

    // state holds current sub view within lessons
    state = {
        view: "list",
    }

    // method to set the local view within the lesson component
    setLocalView = (evt) => {
        if (typeof evt === "string") {
            this.setState({ view: evt })
        } else {
            this.setState({ view: evt.currentTarget.id.split("__")[1] })
        }
    }

    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>Lessons</h1>
                        <LessonNav
                            setLocalView={this.setLocalView}
                        />

                        {this.state.view === "list" ?
                            <LessonView
                                lessons={context.state.teacherLessons}
                                assignLesson={context.assignLesson}
                                deleteLesson={context.deleteLesson}
                            /> : null}

                        {this.state.view === "add" ?
                            <LessonCreateForm
                                createNewLesson={context.createNewLesson}
                                setLocalView={this.setLocalView}
                            /> : null}

                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default LessonEntry
