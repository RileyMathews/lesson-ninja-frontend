import React, { Component } from 'react'
import { Box, Button } from 'bloomer'


class StudentAssignment extends Component {


    render() {
        console.log("student assignment rendered")
        return (
            <React.Fragment>
                <Box>
                    <h1>student: {this.props.student.user.first_name}</h1>
                    <p>is on this lesson</p>
                    <Button onClick={() => this.props.cancelAssignment(this.props.lesson.url, this.props.student.url)}>cancel</Button>
                    <Button onClick={() => this.props.completeAssignment(this.props.lesson.url, this.props.student.url)}>complete</Button>
                </Box>
            </React.Fragment>
        )
    }
}

export default StudentAssignment
