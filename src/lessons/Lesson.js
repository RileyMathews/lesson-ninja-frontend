import React, { Component } from 'react'
import { Button } from 'bloomer/lib/elements/Button';


class Lesson extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="test">
                    <h1>{this.props.lesson.name}</h1>
                    <p>{this.props.lesson.description}</p>
                    <p>{`${this.props.lesson.content.slice(0, 40)} ...`}</p>
                    <Button onClick={() => this.props.setDetailLessonView(this.props.lesson.id)}>Details</Button>
                </div>
            </React.Fragment>
        )
    }
}

export default Lesson
