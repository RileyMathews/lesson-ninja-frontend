import React, { Component } from 'react'
import { Box, Button } from 'bloomer'


class StudentAssignment extends Component {


    render() {
        return (
            <React.Fragment>
                <Box>
                    <h1>student: {this.props.student.user.first_name}</h1>
                    <p>is {this.props.onLesson ? "on" : "not on"} this lesson</p>
                    {this.props.onLesson ?
                        <React.Fragment>
                            <Button onClick={() => this.props.cancelAssignment(this.props.lesson.url, this.props.student.url)}>cancel</Button>
                            <Button onClick={() => this.props.completeAssignment(this.props.lesson.url, this.props.student.url)}>complete</Button>
                        </React.Fragment>
                        :
                        <Button onClick={() => this.props.assignLesson(this.props.lesson.url, this.props.student.url)}>Assign</Button>}
                </Box>
            </React.Fragment>
        )
    }
}

export default StudentAssignment
