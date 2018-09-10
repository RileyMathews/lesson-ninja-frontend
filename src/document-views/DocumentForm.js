import React, { Component } from 'react'
import s3 from '../s3'
import { Field, Label, Control, Input, Button } from 'bloomer';


class DocumentForm extends Component {

    state = {
        name: "",
        notes: "",
        file: {}
    }

    submitForm = (evt) => {
        evt.preventDefault()
        const file = document.getElementById("file").files[0]
        this.props.createDocument(file, this.state.name, this.state.notes)
    }

    changeForm = (evt) => {
        const state = {...this.state}
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
