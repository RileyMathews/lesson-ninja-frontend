import React, { Component } from 'react'
import {Button} from 'bloomer'


class LessonDetail extends Component {

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.setListView}>return</Button>
                <h1>lesson</h1>
                <h1>{this.props.lesson.name}</h1>
                <p>{this.props.lesson.description}</p>
                <p>{this.props.lesson.content}</p>
            </React.Fragment>
        )
    }
}

export default LessonDetail
