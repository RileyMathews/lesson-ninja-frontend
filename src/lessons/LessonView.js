import React, { Component } from 'react'
import Lesson from './Lesson';


class LessonView extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>your lessons</h1>
                {this.props.lessons.map(lesson => (
                    <Lesson 
                        key={lesson.id}
                        lesson={lesson}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default LessonView
