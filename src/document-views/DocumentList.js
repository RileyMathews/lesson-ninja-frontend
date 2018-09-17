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
                {this.props.documents.length === 0 ?
                    <h1>You have no documents to view.</h1>
                    :
                    <React.Fragment>
                        {this.props.documents.map(document => (
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
                }

            </React.Fragment>
        )
    }
}

export default DocumentList
