import React, { Component } from 'react'
import {Media, MediaLeft, MediaContent, Content, Level, LevelLeft, Button } from 'bloomer'

/*  
    module: assignment snippet
    author: riley mathews
    purpose: to be the assignment that shows up in the list of student assignments
*/


class AssignmentSnippet extends Component {


    render() {
        return (
            <React.Fragment>
                <Media>
                <MediaLeft>
                </MediaLeft>
                <MediaContent>
                    <Content>
                        <p>
                            <strong>{this.props.assignment.lesson.name}</strong>
                            <br />
                            {this.props.assignment.lesson.description}
                        </p>
                    </Content>
                    <Level isMobile>
                        <LevelLeft>
                            <Button onClick={() => this.props.setDetailView(this.props.assignment.id)}>Details</Button>
                        </LevelLeft>
                    </Level>
                </MediaContent>
            </Media>
            </React.Fragment>
        )
    }
}

export default AssignmentSnippet
