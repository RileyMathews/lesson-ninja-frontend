import React, { Component } from 'react'
import DocumentLessonSnippet from './DocumentLessonSnippet';
import { Input } from 'bloomer/lib/elements/Form/Input';
import "./DocumentLesson.css"

class DocumentLesson extends Component {

    state = {
        filterString: "",
    }

    updateSearch = (evt) => {
        this.setState({ filterString: evt.target.value })
    }


    render() {
        return (
            <React.Fragment>
                <Input type="text" placeholder="documents" value={this.state.filterString} onChange={this.updateSearch} />
                <div id="lesson_document_container">
                    {this.props.documents.sort((x, y) => { return this.props.isDocInLesson(y, this.props.lesson) - this.props.isDocInLesson(x, this.props.lesson) }).filter(document => document.name.toLowerCase().includes(this.state.filterString.toLowerCase())).map(document => (
                        <DocumentLessonSnippet
                            key={document.id}
                            document={document}
                            addDocumentToLesson={this.props.addDocumentToLesson}
                            removeDocumentFromLesson={this.props.removeDocumentFromLesson}
                            docOnLesson={this.props.isDocInLesson(document, this.props.lesson)}
                            lesson={this.props.lesson}
                        />
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default DocumentLesson
