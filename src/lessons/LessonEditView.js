import React, { Component } from 'react'
import { Button, Field, Label, Control, Input, TextArea } from 'bloomer';


class LessonEditView extends Component {

    state = {
        name: "",
        description: "",
        content: ""
    }

    componentDidMount() {
        this.setState(this.props.lesson)
    }

    updateForm = (evt) => {
        const lesson = {...this.state}
        lesson[evt.target.name] = evt.target.value
        this.setState(lesson)
    }

    submitForm = (evt) => {
        evt.preventDefault()
    }

    render() {
        return (
            <React.Fragment>
                <h1>editing</h1>
                <form onSubmit={this.submitForm}>
                    <Field>
                        <Label>Name</Label>
                        <Control>
                            <Input type="text" name="name" onChange={this.updateForm} value={this.state.name} />
                        </Control>
                    </Field>
                    <Field>
                        <Label>description</Label>
                        <Control>
                            <Input type="text" name="description" onChange={this.updateForm} value={this.state.description} />
                        </Control>
                    </Field>
                    <Field>
                        <Label>content</Label>
                        <Control>
                            <TextArea name="content" onChange={this.updateForm} value={this.state.content} />
                        </Control>
                    </Field>
                </form>

                <Button onClick={this.props.toggleEdit}>Submit</Button>
                <Button onClick={this.props.toggleEdit}>Cancel Edit</Button>
            </React.Fragment>
        )
    }
}

export default LessonEditView
