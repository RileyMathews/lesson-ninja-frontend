import React, { Component } from 'react'
import MediaComponent from '../display-components/MediaComponent'

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
                    // <DocumentSnippet key={document.id} document={document} deleteDocument={this.props.deleteDocument}/>
                    <MediaComponent
                        key={document.id}
                        title={`${document.name}`}
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
                        deleteCallback={() => this.props.deleteDocument(document)}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default DocumentList
