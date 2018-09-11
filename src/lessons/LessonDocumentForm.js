import React, { Component } from 'react'
import { Field, Label, Control, Select, Button } from 'bloomer'

/*  
    module: lesson document form component
    author: riley mathews
    purpose: to create a select box from all documents passed to it
*/


class LessonDocumentForm extends Component {

    // state holds the currently selected documents url
    state = {
        docURL: ""
    }

    // method to submit the form
    submitForm = evt => {
        evt.preventDefault()
        this.props.addDocumentToLesson(this.state.docURL, this.props.lesson.url)
    }

    // method to update state from value
    updateForm = evt => {
        this.setState({ docURL: evt.target.value })
    }



    render() {
        return (
            <React.Fragment>
                <h1>lesson document form</h1>
                <form onSubmit={this.submitForm}>
                    <Field>
                        <Label>Add Document</Label>
                        <Control>
                            <Select defaultValue="default" onChange={this.updateForm}>
                                {/* default option */}
                                <option value="default" disabled="disabled">select a document</option>
                                {/* loop through documents and generate an option for each one if it is not already attached to the current lesson */}
                                {this.props.documents.map(document => (
                                    <React.Fragment key={`fragment__${document.id}`}>
                                        {this.props.isDocInLesson(document, this.props.lesson) ? null : <option value={document.url} key={document.id}>{document.name}</option>}
                                    </React.Fragment>
                                ))}
                            </Select>
                            <Button type="submit">Assign</Button>
                        </Control>
                    </Field>
                </form>
            </React.Fragment>
        )
    }
}

export default LessonDocumentForm
