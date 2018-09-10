import React, { Component } from 'react'
import { Button, Media, MediaLeft, MediaContent, Content, Level, LevelLeft } from 'bloomer'


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
                {/* <MediaRight><Delete /></MediaRight> */}
            </Media>
        )
    }
}

export default Student
