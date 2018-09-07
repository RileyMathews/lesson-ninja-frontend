import React, { Component } from 'react'
import {Button} from 'bloomer'


class Student extends Component {


    render() {
        return (
            <div className="test">
                <h1>Student: {this.props.student.user.first_name} {this.props.student.user.last_name}</h1>
                <Button onClick={() => this.props.setDetailView(this.props.student.id)}>Detail</Button>
            </div>
        )
    }
}

export default Student
