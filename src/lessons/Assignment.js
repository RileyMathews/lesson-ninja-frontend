import React, { Component } from 'react'
import StudentAssignment from './StudentAssignment';
import { Input } from 'bloomer'
import PotentialAssignment from './PotentialAssignment';


class Assignment extends Component {

    state = {
        searchString: "",
    }

    updateSearch = (evt) => {
        this.setState({searchString: evt.target.value})
    }


    render() {
        console.log("assignment component rendered", this.props.assignments)
        return (
            <React.Fragment>
                <Input type="text" name="search" placeholder="search" value={this.state.searchString} onChange={this.updateSearch}/>
                {this.props.students.filter(student => student.user.first_name.toLowerCase().includes(this.state.searchString.toLowerCase()) || student.user.last_name.toLowerCase().includes(this.state.searchString.toLowerCase()) || student.user.username.toLowerCase().includes(this.state.searchString.toLowerCase())).map(student => (
                    <React.Fragment key={`frag__${student.id}`}>
                        {this.props.isStudentOnLesson(this.props.lesson, student) ?
                            <StudentAssignment 
                                key={student.id}
                                student={student}
                                lesson={this.props.lesson}
                                assignment={this.props.findAssignment(this.props.lesson.url, student.url)}
                                cancelAssignment={this.props.cancelAssignment}
                                completeAssignment={this.props.completeAssignment}
                            />
                            :
                            <PotentialAssignment 
                                key={student.id}
                                student={student}
                                lesson={this.props.lesson}
                                assignLesson={this.props.assignLesson}
                            />
                    }
                    </React.Fragment> 
                    
                ))}
            </React.Fragment>
        )
    }
}

export default Assignment
