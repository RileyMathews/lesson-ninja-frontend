import React, { Component } from 'react'


class DocumentList extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>document list</h1>
                {this.props.documents.map(document => (
                    <p key={document.id}>{document.name}</p>
                ))}
            </React.Fragment>
        )
    }
}

export default DocumentList
