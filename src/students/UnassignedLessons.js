import React, { Component } from 'react'
import UnassignedLessonSnippet from './UnassignedLessonSnippet';
import {Input} from 'bloomer'


class UnassignedLessons extends Component {

    state = {
        searchString: ""
    }

    updateSearch = (evt) => {
        this.setState({searchString: evt.target.value})
    }


    render() {
        return (
            <React.Fragment>
                <h1>lessons</h1>
                <Input type="text" placeholder="search lessons" value={this.state.searchString} onChange={this.updateSearch} />
                {this.props.lessons.filter(lesson => !this.props.isStudentOnLesson(lesson, this.props.student)).filter(lesson => lesson.name.toLowerCase().includes(this.state.searchString.toLowerCase())).map(lesson => (
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
