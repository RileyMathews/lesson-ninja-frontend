import React, { Component } from 'react'
import { Box, Icon, Button } from 'bloomer';
import './StudentAssignment.css'

class StudentAssignment extends Component {


    render() {
        return (
            <React.Fragment>
                <Box className="student_assignment">
                    <p>{this.props.assignment.lesson.name}</p>
                    <p>viewed: {this.props.assignment.has_opened ? <Icon className="fa fa-check fa-lg" /> : <Icon className="fa fa-times fa-lg" />}</p>
                    {this.props.assignment.finished_on ?
                        null
                        :
                        <React.Fragment>
                            <Button isSize="small" onClick={() => this.props.completeAssignment(this.props.assignment.lesson.url, this.props.student.url)}>mark complete</Button>
                            <Button isSize="small" onClick={() => this.props.cancelAssignment(this.props.assignment.lesson.url, this.props.student.url)}>cancel</Button>
                        </React.Fragment>
                    }

                </Box>
            </React.Fragment>
        )
    }
}

export default StudentAssignment
