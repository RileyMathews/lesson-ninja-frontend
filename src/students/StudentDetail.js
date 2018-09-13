import React, { Component } from 'react'
import { Button } from 'bloomer/lib/elements/Button';
import StudentAssignment from './StudentAssignment';
import { Hero, HeroBody, Container, Icon } from 'bloomer';
import { Title } from 'bloomer/lib/elements/Title';
import { Content } from 'bloomer/lib/elements/Content';
import './StudentDetail.css'
import UnassignedLessons from './UnassignedLessons';
import AssignmentHistory from './AssignmentHistory';

/*  
    module: student detail component
    author: riley mathews
    purpose: to be the component that shows details about a student
*/


class StudentDetail extends Component {

    state = {
        showLessons: false,
        showAssignmentHistory: false,
    }


    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.setListView}>Return To Students</Button>
                <Hero isSize='small'>
                    <HeroBody>
                        <Container hasTextAlign='centered'>
                            <Title>{this.props.student.user.first_name} {this.props.student.user.last_name}</Title>
                            <Content>
                                <p>{this.props.student.user.username} {this.props.student.user.email}</p>
                            </Content>
                        </Container>
                    </HeroBody>
                </Hero>
                <p>Assignments: </p>
                <div className="student_assignment-container">
                    {this.props.getStudentsAssignments(this.props.student.url).filter(assignment => assignment.finished_on === null).map(assignment => (
                        <StudentAssignment
                            key={assignment.id}
                            assignment={assignment}
                            completeAssignment={this.props.completeAssignment}
                            cancelAssignment={this.props.cancelAssignment}
                            student={this.props.student}
                        />
                    ))}
                </div>
                <Button onClick={() => this.setState({ showLessons: !this.state.showLessons })}>
                    <span className="blocky">Toggle Lessons</span>
                    {this.state.showLessons ?
                        <Icon className="fa fa-chevron-circle-up fa-lg" />
                        :
                        <Icon className="fa fa-chevron-circle-down fa-lg" />
                    }
                </Button>
                {this.state.showLessons ?
                    <UnassignedLessons
                        student={this.props.student}
                        lessons={this.props.lessons}
                        isStudentOnLesson={this.props.isStudentOnLesson}
                        assignLesson={this.props.assignLesson}
                    />
                    :
                    null
                }

                <Button onClick={() => this.setState({ showAssignmentHistory: !this.state.showAssignmentHistory })}>Assignment History
                    {this.state.showAssignmentHistory ?
                        <Icon className="fa fa-chevron-circle-up fa-lg" />
                        :
                        <Icon className="fa fa-chevron-circle-down fa-lg" />
                    }
                </Button>
                {this.state.showAssignmentHistory ?
                    <AssignmentHistory
                        student={this.props.student}
                        assignments={this.props.getStudentsAssignments(this.props.student.url)}
                    />
                    :
                    null
                }
            </React.Fragment>
        )
    }
}

export default StudentDetail
