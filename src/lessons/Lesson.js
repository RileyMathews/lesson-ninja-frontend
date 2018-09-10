import React, { Component } from 'react'


class Lesson extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>prime lesson component</h1>
                <p>name: {this.props.lesson.name}</p>
                <p>description: {this.props.lesson.description}</p>
                <p>content: {this.props.lesson.content}</p>
                <p>documents:</p>
                {this.props.lesson.documents.map(document => (
                    <p key={document.id}>{document.name}</p>
                ))}
            </React.Fragment>
        )
    }
}

export default Lesson
