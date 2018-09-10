import React, { Component } from 'react'
import {Field, Label, Control, Select, Button} from 'bloomer'


class LessonDocumentForm extends Component {

    state = {
        docURL: ""
    }

    submitForm = evt => {
        evt.preventDefault()
        this.props.addDocumentToLesson(this.state.docURL, this.props.lesson.url)
    }

    updateForm = evt => {
        this.setState({docURL: evt.target.value})
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
                                <option value="default" disabled="disabled">select a document</option>
                                {this.props.documents.map(document => (
                                    <option value={document.url} key={document.id}>{document.name}</option>
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
