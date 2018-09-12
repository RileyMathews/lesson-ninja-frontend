import React, { Component } from 'react'
import { Button, Box } from 'bloomer'


class PotentialAssignment extends Component {


    render() {
        console.log("potential assignment rendered")
        return (
            <React.Fragment>
                <Box>
                    <h1>student {this.props.student.user.first_name}</h1>
                    <p>is not on this lesson</p>
                    <Button onClick={() => this.props.assignLesson(this.props.lesson.url, this.props.student.url)}>Assign</Button>
                </Box>
            </React.Fragment>
        )
    }
}

export default PotentialAssignment
