import React, { Component } from 'react'
import { Button } from 'bloomer/lib/elements/Button';


class StudentSearchResult extends Component {

    add = () => {
        this.props.addStudentToTeacher(this.props.student)
    }


    render() {
        return (
            <React.Fragment>
                <div className="test">
                    <h1>result</h1>
                    <p>{this.props.student.user.username}</p>
                    <Button onClick={this.add}>Add</Button>
                </div>
            </React.Fragment>
        )
    }
}

export default StudentSearchResult
