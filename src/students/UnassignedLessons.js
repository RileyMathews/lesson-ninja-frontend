import React, { Component } from 'react'
import { Input } from 'bloomer'
import DropdownBox from '../display-components/DropdownBox';


class UnassignedLessons extends Component {

    state = {
        searchString: ""
    }

    updateSearch = (evt) => {
        this.setState({ searchString: evt.target.value })
    }


    render() {
        return (
            <React.Fragment>
                <h1>lessons</h1>
                <div className="dropdown-container">
                    <Input className="dropdown-search" type="text" placeholder="search lessons" value={this.state.searchString} onChange={this.updateSearch} />
                    {this.props.lessons.filter(lesson => !this.props.isStudentOnLesson(lesson, this.props.student)).filter(lesson => lesson.name.toLowerCase().includes(this.state.searchString.toLowerCase())).map(lesson => (
                        <DropdownBox
                            key={lesson.id}
                            text={`${lesson.name}`}
                            callback1={() => this.props.assignLesson(lesson.url, this.props.student.url)}
                            callback1Text={"Assign"}
                        />
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default UnassignedLessons
