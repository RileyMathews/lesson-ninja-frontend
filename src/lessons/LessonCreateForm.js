import React, { Component } from 'react'
import { Context } from '../Provider';
import {Field, Label, Control, Input, Button} from 'bloomer'


class LessonCreateForm extends Component {

    state = {
        name: "",
        description: "",
        content: "",
    }


    submitForm = (evt) => {
        evt.preventDefault()
    }

    updateForm = (evt) => {
        const lesson = {...this.state}
        lesson[evt.target.name] = evt.target.value
        this.setState(lesson)
    }

    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <form onSubmit={this.submitForm}>
                            <Field>
                                <Label>Title</Label>
                                <Control>
                                    <Input type="text" onChange={this.updateForm} name="name" value={this.state.name} />
                                </Control>
                            </Field>

                            <Field>
                                <Label>Description</Label>
                                <Control>
                                    <Input type="text" onChange={this.updateForm} name="description" value={this.state.description} />
                                </Control>
                            </Field>

                            <Field>
                                <Label>Content</Label>
                                <Control>
                                    <Input type="text" onChange={this.updateForm} name="content" value={this.state.content} />
                                </Control>
                            </Field>

                            <Field>
                                <Control>
                                    <Button type="submit" isColor='primary'>Submit</Button>
                                </Control>
                            </Field>
                        </form>
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default LessonCreateForm
