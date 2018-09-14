import React, { Component } from 'react'
import { Input } from 'bloomer/lib/elements/Form/Input';
import "./DocumentLesson.css"
import DropdownBox from '../display-components/DropdownBox';

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
                <div className="dropdown-container" id="lesson_document_container">
                <Input className="dropdown-search" type="text" placeholder="documents" value={this.state.filterString} onChange={this.updateSearch} />
                    {this.props.documents.sort((x, y) => { return this.props.isDocInLesson(y, this.props.lesson) - this.props.isDocInLesson(x, this.props.lesson) }).filter(document => document.name.toLowerCase().includes(this.state.filterString.toLowerCase())).map(document => (
                        <DropdownBox
                            key={document.id}
                            text={`${document.name}`}
                            callback1={() => {
                                this.props.isDocInLesson(document, this.props.lesson) ?
                                    this.props.removeDocumentFromLesson(this.props.lesson.id, document.id, this.props.lesson.url)
                                    :
                                    this.props.addDocumentToLesson(document.url, this.props.lesson.url)
                            }}
                            callback1Text={this.props.isDocInLesson(document, this.props.lesson) ? "remove" : "add"}
                        />

                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default DocumentLesson
