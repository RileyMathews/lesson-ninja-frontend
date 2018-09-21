import React, { Component } from 'react'
import { Input } from 'bloomer'
import './Assignment.css'
import DropdownBox from '../display-components/DropdownBox';

class Assignment extends Component {

    state = {
        searchString: "",
    }

    updateSearch = (evt) => {
        this.setState({ searchString: evt.target.value })
    }


    render() {
        return (
            <React.Fragment>
            <Input className="dropdown-search" type="text" name="search" placeholder="search" value={this.state.searchString} onChange={this.updateSearch} />
                {this.props.students.filter(student => student.user.first_name.toLowerCase().includes(this.state.searchString.toLowerCase()) || student.user.last_name.toLowerCase().includes(this.state.searchString.toLowerCase()) || student.user.username.toLowerCase().includes(this.state.searchString.toLowerCase())).map(student => (
                    <div className="dropdown-container" id="lesson_assignment_container" key={`frag__${student.id}`}>
                        {this.props.isStudentOnLesson(this.props.lesson, student) ?
                            <React.Fragment>
                                {this.props.findAssignment(this.props.lesson.url, student.url).finished_on === null ?
                                    <DropdownBox
                                        text={`${student.user.first_name} ${student.user.last_name} is on this lesson`}
                                        callback1={() => this.props.completeAssignment(this.props.lesson.url, student.url)}
                                        callback1Text={"Complete"}
                                        callback2={() => this.props.cancelAssignment(this.props.lesson.url, student.url)}
                                        callback2Text={"Cancel"}
                                    />
                                    :
                                    <DropdownBox 
                                        text={`${student.user.first_name} ${student.user.last_name} has finished this assignment`}
                                    />
                                }
                            </React.Fragment>
                            :
                            <DropdownBox
                                key={student.id}
                                text={`${student.user.first_name} ${student.user.last_name}`}
                                callback1={() => this.props.assignLesson(this.props.lesson.url, student.url)}
                                callback1Text={"Assign"}
                            />
                        }
                    </div>

                ))}
            </React.Fragment>
        )
    }
}

export default Assignment
