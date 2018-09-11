import React, { Component } from 'react'
import { Box } from 'bloomer'


class StudentAssignment extends Component {


    render() {
        return (
            <React.Fragment>
                <Box>
                    <h1>student: {this.props.student.user.first_name}</h1>
                </Box>
            </React.Fragment>
        )
    }
}

export default StudentAssignment
