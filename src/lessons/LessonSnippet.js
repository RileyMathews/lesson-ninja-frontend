import React, { Component } from 'react'


class LessonSnippet extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="test">
                    <h1>{this.props.lesson.name}</h1>
                    <p>{this.props.lesson.description}</p>
                    <p>{`${this.props.lesson.content.slice(0, 40)} ...`}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default LessonSnippet
