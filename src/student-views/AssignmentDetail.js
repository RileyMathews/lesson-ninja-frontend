import React, { Component } from 'react'
import Banner from '../display-components/Banner';
import MediaComponent from '../display-components/MediaComponent';

/*  
    module: assignment detail view
    author: riley mathews
    purpose: to show the details of an assignment passed to it
*/


class AssignmentDetail extends Component {

    componentDidMount() {
        if (!this.props.assignment.has_opened) {
            this.props.openAssignment(this.props.assignment)
        }
    }


    render() {
        return (
            <React.Fragment>
                <Banner 
                    title={this.props.assignment.lesson.name}
                    text={`${this.props.assignment.lesson.description} \n ${this.props.assignment.lesson.content}`}
                />
                {this.props.assignment.lesson.documents.map(document => (
                    <MediaComponent 
                        key={document.url}
                        title={document.name}
                        links={[
                            {
                                url: document.s3_url,
                                text: "view",
                                download: false
                            },
                            {
                                url: document.s3_url,
                                text: "download",
                                download: true
                            }
                        ]}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default AssignmentDetail
