import React, { Component } from 'react'
import {Box} from 'bloomer'


class CompletedAssignment extends Component {


    render() {
        return (
            <React.Fragment>
                <Box>
                    <p>{this.props.assignment.lesson.name} completed on {this.props.assignment.finished_on}</p>
                </Box>
            </React.Fragment>
        )
    }
}

export default CompletedAssignment
