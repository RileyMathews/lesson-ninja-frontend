import React, { Component } from 'react'
import { Button } from 'bloomer'
import { Context } from '../Provider';
import LessonEditView from './LessonEditView';
import Lesson from './Lesson';
import LessonDocumentForm from './LessonDocumentForm';
import Assignment from './Assignment';

/*  
    module: lesson detail component
    author: riley mathews
    purpose: to the entry point for viewing a lesson, and provide functionality for editing that lesson, or just viewing the details
*/


class LessonDetail extends Component {

    state = {
        editing: false,
        studentURL: 0,
        showAssignments: false
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
                                <Lesson lesson={this.props.lesson} removeDocumentFromLesson={context.removeDocumentFromLesson} />
                                <Button onClick={this.toggleEdit}>Edit</Button>
                                <LessonDocumentForm
                                    documents={context.state.documents}
                                    addDocumentToLesson={context.addDocumentToLesson}
                                    lesson={this.props.lesson}
                                    isDocInLesson={context.isDocInLesson}
                                />
                                <p onClick={() => this.setState({showAssignments: !this.state.showAssignments})}>toggle students</p>
                                {this.state.showAssignments ?
                                    <Assignment
                                        students={context.state.teacher.students}
                                        isStudentOnLesson={context.isStudentOnLesson}
                                        lesson={this.props.lesson}
                                        assignLesson={context.assignLesson}
                                        cancelAssignment={context.cancelAssignment}
                                        completeAssignment={context.completeAssignment}
                                        findAssignment={context.findAssignment}
                                        assignments={context.state.assignments}
                                    />
                                    :
                                    null
                                }

                            </React.Fragment>
                        }

                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default LessonDetail
