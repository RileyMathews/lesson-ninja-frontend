import React, { Component } from 'react'
import SearchStudents from './SearchStudents';
import StudentList from './StudentList';
import { Context } from '../Provider';
import StudentDetail from './StudentDetail';
import StudentNav from './StudentNav';

/*  
    module: student management component
    author: riley mathews
    purpose: to be the entry point for a teachers view of managing their students
*/


class StudentManagementEntry extends Component {

    state = {
        detail: false,
        list: true,
        detailStudentId: 0,
        view: "list",
    }

    setLocalView = (evt) => {
        if (typeof evt === "string") {
            this.setState({ view: evt })
        } else {
            this.setState({ view: evt.currentTarget.id.split("__")[1] })
        }
    }

    setDetailView = (id) => {
        this.setState({
            detail: true,
            list: false,
            detailStudentId: id,
        })
    }

    setListView = () => {
        this.setState({
            detail: false,
            list: true,
        })
    }

    toggleSearch = () => {
        this.setState({ searching: !this.state.searching })
    }


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>my students</h1>
                        <StudentNav
                            setLocalView={this.setLocalView}
                        />
                        {this.state.view === "add" ?
                            <SearchStudents />
                            :
                            null
                        }
                        {this.state.view === "list" ?

                            <React.Fragment>
                                {this.state.list ?
                                    <StudentList
                                        students={context.state.teacher.students}
                                        setDetailView={this.setDetailView}
                                        removeStudentFromTeacher={context.removeStudentFromTeacher}
                                    />
                                    :
                                    <StudentDetail
                                        setListView={this.setListView}
                                        student={context.state.teacher.students.find(student => student.id === this.state.detailStudentId)}
                                        getStudentsAssignments={context.getStudentsAssignments}
                                    />}
                            </React.Fragment>
                            : 
                            null
                        }
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default StudentManagementEntry
