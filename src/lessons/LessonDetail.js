import React, { Component } from 'react'
import { Button } from 'bloomer'
import { Context } from '../Provider';
import LessonEditView from './LessonEditView';


class LessonDetail extends Component {

    state = {
        editing: false,
    }

    toggleEdit = () => {
        this.setState({editing: !this.state.editing})
    }

    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment >
                        <Button onClick={this.props.setListView}>Return</Button>
                        {this.state.editing ? 
                            <LessonEditView 
                                lesson={this.props.lesson}
                                toggleEdit={this.toggleEdit}
                            />
                        :
                            <React.Fragment>
                                <h1>lesson</h1>
                                <h1>{this.props.lesson.name}</h1>
                                <p>{this.props.lesson.description}</p>
                                <p>{this.props.lesson.content}</p>
                                <Button onClick={this.toggleEdit}>Edit</Button>
                            </React.Fragment>
                        }

                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default LessonDetail
