import React, { Component } from 'react'
import { Box, Icon, Button } from 'bloomer';
import './StudentAssignment.css'

class StudentAssignment extends Component {


    render() {
        return (
            <React.Fragment>
                <Box className="student_assignment">
                    <p>{this.props.assignment.lesson.name}</p>
                    <p>viewed: {this.props.assignment.has_opened ? <Icon className="fa fa-check fa-lg" /> : <Icon className="fa fa-times fa-lg" /> }</p>
                    <Button isSize="small" disabled={true}>mark complete</Button>
                </Box>
            </React.Fragment>
        )
    }
}

export default StudentAssignment
