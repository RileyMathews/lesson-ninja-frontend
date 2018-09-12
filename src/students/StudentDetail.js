import React, { Component } from 'react'
import { Button } from 'bloomer/lib/elements/Button';
import StudentAssignment from './StudentAssignment';
import { Hero, HeroBody, Container } from 'bloomer';
import { Title } from 'bloomer/lib/elements/Title';
import { Content } from 'bloomer/lib/elements/Content';
import './StudentDetail.css'

/*  
    module: student detail component
    author: riley mathews
    purpose: to be the component that shows details about a student
*/


class StudentDetail extends Component {

    state = {
        assignments: []
    }

    componentDidMount() {
        this.setState({ assignments: this.props.getStudentsAssignments(this.props.student.url) })
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
                    {this.props.getStudentsAssignments(this.props.student.url).map(assignment => (
                        <StudentAssignment
                            key={assignment.id}
                            assignment={assignment}
                            completeAssignment={this.props.completeAssignment}
                            cancelAssignment={this.props.cancelAssignment}
                            student={this.props.student}
                        />
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default StudentDetail
