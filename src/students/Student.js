import React, { Component } from 'react'
import { Button, Media, MediaLeft, MediaContent, Content, Level, LevelLeft, MediaRight, Delete } from 'bloomer'

/*  
    module: student component
    author: riley mathews
    purpose: to be the component that displays in a list of students
*/


class Student extends Component {


    render() {
        return (
            <Media>
                <MediaLeft>
                </MediaLeft>
                <MediaContent>
                    <Content>
                        <p>
                            <strong>{this.props.student.user.first_name} {this.props.student.user.last_name}</strong>
                            <br />
                            Email: {this.props.student.user.email} Username: {this.props.student.user.username}
                        </p>
                    </Content>
                    <Level isMobile>
                        <LevelLeft>
                            <Button onClick={() => this.props.setDetailView(this.props.student.id)}>Details</Button>
                        </LevelLeft>
                    </Level>
                </MediaContent>
                <MediaRight><Delete onClick={() => this.props.removeStudentFromTeacher(this.props.student)}/></MediaRight>
            </Media>
        )
    }
}

export default Student
