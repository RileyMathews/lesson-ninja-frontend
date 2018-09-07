import React, { Component } from 'react'


class StudentSearchResult extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="test">
                    <h1>result</h1>
                    <p>{this.props.student.user.username}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default StudentSearchResult
