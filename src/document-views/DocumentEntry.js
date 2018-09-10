import React, { Component } from 'react'
import DocumentList from './DocumentList';
import DocumentForm from './DocumentForm';
import { Context } from '../Provider';


class DocumentEntry extends Component {


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>manage your documents</h1>
                        <DocumentList />
                        <DocumentForm 
                            createDocument={context.createDocument}
                        />
                    </React.Fragment>
                )}
            </Context.Consumer>

        )
    }
}

export default DocumentEntry
