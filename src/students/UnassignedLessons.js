import React, { Component } from 'react'
import UnassignedLessonSnippet from './UnassignedLessonSnippet';


class UnassignedLessons extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>lessons</h1>
                {this.props.lessons.filter(lesson => !this.props.isStudentOnLesson(lesson, this.props.student)).map(lesson => (
                    <UnassignedLessonSnippet
                        key={lesson.id}
                        lesson={lesson}
                        student={this.props.student}
                        assignLesson={this.props.assignLesson}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default UnassignedLessons
