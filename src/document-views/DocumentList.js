import React, { Component } from 'react'
import DocumentSnippet from './DocumentSnippet';


class DocumentList extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>document list</h1>
                {this.props.documents.map(document => (
                    <DocumentSnippet key={document.id} document={document}/>
                ))}
            </React.Fragment>
        )
    }
}

export default DocumentList
