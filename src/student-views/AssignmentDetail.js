import React, { Component } from 'react'
import AssignmentDocument from './AssignmentDocument';

/*  
    module: assignment detail view
    author: riley mathews
    purpose: to show the details of an assignment passed to it
*/


class AssignmentDetail extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>{this.props.assignment.lesson.name}</h1>
                <h1>{this.props.assignment.lesson.details}</h1>
                <h1>{this.props.assignment.lesson.content}</h1>
                {this.props.assignment.lesson.documents.map(document => (
                    <AssignmentDocument key={document.url} document={document} />
                ))}
            </React.Fragment>
        )
    }
}

export default AssignmentDetail
