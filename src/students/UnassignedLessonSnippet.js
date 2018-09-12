import React, { Component } from 'react'
import { Box } from 'bloomer/lib/elements/Box';
import { Button } from 'bloomer/lib/elements/Button';


class UnassignedLessonSnippet extends Component {


    render() {
        return (
            <React.Fragment>
                <Box>
                    <h1>Lesson {this.props.lesson.name}</h1>
                    <Button onClick={() => this.props.assignLesson(this.props.lesson.url, this.props.student.url)}>Assign</Button>
                </Box>
            </React.Fragment>
        )
    }
}

export default UnassignedLessonSnippet
