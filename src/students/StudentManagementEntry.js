import React, { Component } from 'react'
import SearchStudents from './SearchStudents';
import StudentList from './StudentList';
import { Context } from '../Provider';
import StudentDetail from './StudentDetail';
import {Button} from 'bloomer'


class StudentManagementEntry extends Component {

    state = {
        searching: false,
        detail: false,
        list: true,
        detailStudentId: 0,
    }

    setDetailView = (id) => {
        this.setState({
            searching: false,
            detail: true,
            list: false,
            detailStudentId: id,
        })
    }

    setListView = () => {
        this.setState({
            searching: false,
            detail: false,
            list: true,
        })
    }

    toggleSearch = () => {
        this.setState({searching: !this.state.searching})
    }


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>my students</h1>
                        <Button onClick={this.toggleSearch}>{this.state.searching ? "Cancel Search" : "Searching"}</Button>
                        {this.state.searching ?
                            <SearchStudents />
                            :
                            null
                        }
                        {this.state.list ?
                            <StudentList
                                students={context.state.teacher.students}
                                setDetailView={this.setDetailView}
                            />
                            :
                            <StudentDetail
                                setListView={this.setListView}
                                student={context.state.teacher.students.find(student => student.id === this.state.detailStudentId)}
                            />
                        }
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default StudentManagementEntry
