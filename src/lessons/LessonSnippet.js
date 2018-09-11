import React, { Component } from 'react'
import { Button, Media, MediaLeft, MediaContent, Content, Level, LevelLeft } from 'bloomer'

/*  
    module: lesson snippet component
    author: riley mathews
    purpose: to generate a compact representation of a lesson to be viewed in a list
*/


class LessonSnippet extends Component {


    render() {
        return (
            <Media>
                <MediaLeft>
                </MediaLeft>
                <MediaContent>
                    <Content>
                        <p>
                            <strong>{this.props.lesson.name}</strong>
                            <br />
                            {this.props.lesson.description}
                        </p>
                    </Content>
                    <Level isMobile>
                        <LevelLeft>
                            <Button onClick={() => this.props.setDetailLessonView(this.props.lesson.id)}>Details</Button>
                        </LevelLeft>
                    </Level>
                </MediaContent>
                {/* <MediaRight><Delete /></MediaRight> */}
            </Media>
        )
    }
}

export default LessonSnippet
