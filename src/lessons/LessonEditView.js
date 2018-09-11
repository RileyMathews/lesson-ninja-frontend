import React, { Component } from 'react'
import { Button, Field, Label, Control, Input, TextArea } from 'bloomer';

/*  
    module: lesson edit view component
    author: riley mathews
    purpose: to generate a form pre populated with lesson information that allows the user to edit and change it
*/


class LessonEditView extends Component {

    // state holds lesson information from form
    state = {
        name: "",
        description: "",
        content: ""
    }

    // on component mount, set the less passed in props into state so the form is pre populated with the information
    componentDidMount() {
        this.setState(this.props.lesson)
    }

    // method to update state from form
    updateForm = (evt) => {
        const lesson = {...this.state}
        lesson[evt.target.name] = evt.target.value
        this.setState(lesson)
    }

    // method to submit form
    submitForm = (evt) => {
        evt.preventDefault()
        this.props.updateLesson(this.state)
        this.props.toggleEdit()
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
                <Button type="submit">Submit</Button>
                <Button onClick={this.props.toggleEdit}>Cancel Edit</Button>
                </form>

            </React.Fragment>
        )
    }
}

export default LessonEditView
