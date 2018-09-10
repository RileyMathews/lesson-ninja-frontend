import React, { Component } from 'react'
import { Button } from 'bloomer'
import { Context } from '../Provider';
import LessonEditView from './LessonEditView';
import { Field, Label, Control, Select } from 'bloomer'
import Lesson from './Lesson';
import LessonDocumentForm from './LessonDocumentForm';


class LessonDetail extends Component {

    state = {
        editing: false,
        studentURL: 0,
    }

    toggleEdit = () => {
        this.setState({ editing: !this.state.editing })
    }

    setStudent = (evt) => {
        console.log(evt.target.value)
        this.setState({
            studentURL: evt.target.value
        })
    }

    createAssinment = (evt) => {
        evt.preventDefault()
        this.props.assignLesson(this.props.lesson.url, this.state.studentURL)
    }

    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment >
                        <Button onClick={this.props.setListView}>Return</Button>
                        {this.state.editing ?
                            <LessonEditView
                                lesson={this.props.lesson}
                                toggleEdit={this.toggleEdit}
                                updateLesson={context.updateLesson}
                            />
                            :
                            <React.Fragment>
                                <h1>lesson</h1>
                                <Lesson lesson={this.props.lesson}/>
                                <Button onClick={this.toggleEdit}>Edit</Button>
                                <LessonDocumentForm 
                                    documents={context.state.documents}
                                    addDocumentToLesson={context.addDocumentToLesson}
                                    lesson={this.props.lesson}
                                />
                                <form onSubmit={this.createAssinment}>
                                    <Field>
                                        <Label>Assign to:</Label>
                                        <Control>
                                            <Select defaultValue="default" onChange={this.setStudent}>
                                                    <option value="default" disabled="disabled">select a student</option>
                                                {context.state.teacher.students.map(student => (
                                                    <option value={student.url} key={student.id}>{student.user.first_name}</option>
                                                ))}
                                            </Select>
                                            <Button type="submit">Assign</Button>
                                        </Control>
                                    </Field>
                                </form>
                            </React.Fragment>
                        }

                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default LessonDetail
