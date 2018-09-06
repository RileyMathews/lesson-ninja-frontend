import React, { Component } from 'react'
import { Button } from 'bloomer/lib/elements/Button';


class Lesson extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="test">
                    <h1>{this.props.lesson.name}</h1>
                    <p>{this.props.lesson.description}</p>
                    <p>{this.props.lesson.content}</p>
                    <Button disabled={true}>Details</Button>
                </div>
            </React.Fragment>
        )
    }
}

export default Lesson
