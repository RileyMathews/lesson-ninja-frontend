import React, { Component } from 'react'
import { Context } from '../Provider';
import { Button } from 'bloomer/lib/elements/Button';
import LessonCreateForm from './LessonCreateForm';


class LessonEntry extends Component {

    state = {
        showCreateForm: false,
    }

    toggleCreateForm = () => {
        this.setState({ showCreateForm: !this.state.showCreateForm })
    }


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>Lessons</h1>
                        <Button color="primary" onClick={this.toggleCreateForm}>{this.state.showCreateForm ? "Cancel" : "Create New Lesson"}</Button>
                        {this.state.showCreateForm ?
                            <LessonCreateForm 
                                
                            />
                            :
                            null
                        }
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default LessonEntry
