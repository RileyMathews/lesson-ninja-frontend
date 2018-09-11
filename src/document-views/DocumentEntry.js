import React, { Component } from 'react'
import DocumentList from './DocumentList';
import DocumentForm from './DocumentForm';
import { Context } from '../Provider';
import DocumentNav from './DocumentNav';

/*  
    module: document entry component
    author: riley mathews
    purpose: to be the entry point for the document view
*/


class DocumentEntry extends Component {

    // state holds the current view of document
    state = {
        view: "list",
    }

    setLocalView = (evt) => {
        // method to set local view of documents
        // current options are 'list', 'add'
        
        // check if view was manually passed in
        if (typeof evt === "string") {
            this.setState({view: evt})
        } else {
            const view = evt.currentTarget.id.split("__")[1]
            this.setState({ view: view })
        }
    }


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>manage your documents</h1>
                        {/* document view sub nav */}
                        <DocumentNav setLocalView={this.setLocalView} />

                        {/* following components rendered based on view in state */}
                        {this.state.view === "list" ? 
                        <DocumentList
                            documents={context.state.documents}
                            deleteDocument={context.deleteDocument}
                        /> : null}

                        {this.state.view === "add" ? 
                        <DocumentForm
                            createDocument={context.createDocument}
                            setLocalView={this.setLocalView}
                        /> : null}
                        
                    </React.Fragment>
                )}
            </Context.Consumer>

        )
    }
}

export default DocumentEntry
