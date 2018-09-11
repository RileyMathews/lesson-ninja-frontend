import React, { Component } from 'react'

/*  
    module: document snippet component
    author: riley mathews
    purpose: to represent a document object from the database in a shorter list view
*/


class DocumentSnippet extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="test">
                    <h1>document</h1>
                    <p>{this.props.document.name}</p>
                    <a href={this.props.document.s3_url} target="blank">view</a>
                    <span>   </span>
                    <a href={this.props.document.s3_url} download>download</a>
                </div>
            </React.Fragment>
        )
    }
}

export default DocumentSnippet
