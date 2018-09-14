import React, { Component } from 'react'
import { Button } from 'bloomer'
import { Context } from '../Provider';
import LessonEditView from './LessonEditView';
import Assignment from './Assignment';
import DocumentLesson from './DocumentLesson';
import DropdownToggle from '../display-components/DropdownToggle';
import Banner from '../display-components/Banner';

/*  
    module: lesson detail component
    author: riley mathews
    purpose: to the entry point for viewing a lesson, and provide functionality for editing that lesson, or just viewing the details
*/


class LessonDetail extends Component {

    state = {
        editing: false,
        studentURL: 0,
        showAssignments: false,
        showDocuments: false,
    }

    toggleEdit = () => {
        this.setState({ editing: !this.state.editing })
    }

    setStudent = (evt) => {
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
                                <Banner
                                    title={this.props.lesson.name}
                                    text={`${this.props.lesson.description} \n ${this.props.lesson.content}`}
                                />
                                <Button onClick={this.toggleEdit}>Edit</Button>

                                <DropdownToggle callback={() => this.setState({ showDocuments: !this.state.showDocuments })} active={this.state.showDocuments} text={"Show Documents"} />
                                {this.state.showDocuments ?
                                    <DocumentLesson
                                        documents={context.state.documents}
                                        addDocumentToLesson={context.addDocumentToLesson}
                                        lesson={this.props.lesson}
                                        isDocInLesson={context.isDocInLesson}
                                        removeDocumentFromLesson={context.removeDocumentFromLesson}
                                    />
                                    :
                                    null
                                }

                                <DropdownToggle callback={() => this.setState({ showAssignments: !this.state.showAssignments })} active={this.state.showAssignments} text={"Show Assignments"} />
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
