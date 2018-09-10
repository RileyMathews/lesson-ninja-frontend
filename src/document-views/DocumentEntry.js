import React, { Component } from 'react'
import DocumentList from './DocumentList';
import DocumentForm from './DocumentForm';
import { Context } from '../Provider';
import DocumentNav from './DocumentNav';


class DocumentEntry extends Component {

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
                        <DocumentNav setLocalView={this.setLocalView} />

                        {this.state.view === "list" ? 
                        <DocumentList
                            documents={context.state.documents}
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
