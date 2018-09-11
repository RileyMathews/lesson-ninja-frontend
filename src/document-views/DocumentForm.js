import React, { Component } from 'react'
import { Field, Label, Control, Input, Button } from 'bloomer';

/*  
    module: document form
    author: riley mathews
    purpose: to create form and attached methods for creating a document
*/


class DocumentForm extends Component {

    // state holds value from the text fields of the form
    state = {
        name: "",
        notes: "",
    }

    // method to submit the form
    submitForm = (evt) => {
        evt.preventDefault()
        const file = document.getElementById("file").files[0]
        this.props.createDocument(file, this.state.name, this.state.notes)
        this.props.setLocalView("list")
    }

    // method to change state from form value
    changeForm = (evt) => {
        const state = { ...this.state }
        state[evt.target.name] = evt.target.value
        this.setState(state)
    }

    render() {
        return (
            <React.Fragment>
                <h1>document form</h1>
                <form onSubmit={this.submitForm}>
                    <Field>
                        <Label>Name</Label>
                        <Control>
                            <Input type="text" name="name" value={this.state.name} onChange={this.changeForm} />
                        </Control>
                    </Field>

                    <Field>
                        <Label>Notes</Label>
                        <Control>
                            <Input type="text" name="notes" value={this.state.notes} onChange={this.changeForm} />
                        </Control>
                    </Field>

                    <Field>
                        <Label>File</Label>
                        <Control>
                            <Input id="file" type="file" />
                        </Control>
                    </Field>

                    <Field>
                        <Control>
                            <Button type="submit">Submit</Button>
                        </Control>
                    </Field>
                </form>
            </React.Fragment>
        )
    }
}

export default DocumentForm
