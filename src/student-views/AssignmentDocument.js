import React, { Component } from 'react'


class AssignmentDocument extends Component {


    render() {
        return (
            <React.Fragment>
                <p>{this.props.document.name} <a href={this.props.document.s3_url}>view</a> <a href={this.props.document.s3_url} download>download</a></p>

            </React.Fragment>
        )
    }
}

export default AssignmentDocument
