import React, { Component } from 'react'


class LessonDetail extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>lesson</h1>
                <h1>id: {this.props.match.params.id}</h1>
            </React.Fragment>
        )
    }
}

export default LessonDetail
