import React, { Component } from 'react'
import DocumentSnippet from './DocumentSnippet';

/*  
    module: document list component
    author: riley mathews
    purpose: to loop over list of documents and call a document snippet component
*/


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
