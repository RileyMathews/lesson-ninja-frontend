import React, { Component } from 'react'
import { Button } from 'bloomer'
import { Context } from '../Provider';
import LessonEditView from './LessonEditView';
import Lesson from './Lesson';
import Assignment from './Assignment';
import DocumentLesson from './DocumentLesson';
import { Icon } from 'bloomer/lib/elements/Icon';

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
                                <h1>lesson</h1>
                                <Lesson lesson={this.props.lesson} removeDocumentFromLesson={context.removeDocumentFromLesson} />
                                <Button onClick={this.toggleEdit}>Edit</Button>

                                <div className="blocky">
                                    <Button onClick={() => this.setState({ showDocuments: !this.state.showDocuments })}>
                                        <span className="blocky">manage documents</span>
                                        {this.state.showDocuments ?
                                            <Icon className="fa fa-chevron-circle-up fa-lg" />
                                            :
                                            <Icon className="fa fa-chevron-circle-down fa-lg" />
                                        }
                                    </Button>
                                </div>
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


                                <Button className="clicky" onClick={() => this.setState({ showAssignments: !this.state.showAssignments })}>
                                    <span className="blocky">manage students</span>
                                    {this.state.showAssignments ?
                                        <Icon className="fa fa-chevron-circle-up fa-lg" />
                                        :
                                        <Icon className="fa fa-chevron-circle-down fa-lg" />
                                    }
                                    </Button>
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
