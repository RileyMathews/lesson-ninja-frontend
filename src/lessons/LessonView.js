import React, { Component } from 'react'
import LessonDetail from './LessonDetail';
import MediaComponent from '../display-components/MediaComponent';

/*  
    module: lesson view component
    author: riley mathews
    purpose: to view either a lesson list, or detail view based on user interaction
*/


class LessonView extends Component {

    // state holds weather a list or detail is being viewed, and what the current detail lesson id is
    state = {
        detailView: false,
        detailLessonId: 0,
    }

    // function that accepts an id of a lesson, and changes state so that the detail for that lesson is rendered
    setDetailLessonView = (id) => {
        this.setState({
            detailView: true,
            detailLessonId: id
        })
    }

    // method to return to viewing a list of lessons
    setListView = () => {
        this.setState({
            detailView: false
        })
    }


    render() {
        return (
            <React.Fragment>
                <h1>your lessons</h1>
                {this.state.detailView ?
                    <LessonDetail
                        lesson={this.props.lessons.find(lesson => lesson.id === this.state.detailLessonId)}
                        setListView={this.setListView}
                        assignLesson={this.props.assignLesson}
                    />
                    :
                    <React.Fragment>
                        {this.props.lessons.map(lesson => (
                            <MediaComponent 
                                key={lesson.id}
                                title={`${lesson.name}`}
                                subtitle={`${lesson.description}`}
                                mainCallback={() => this.setDetailLessonView(lesson.id)}
                                mainCallbackText={"Detail"}
                                deleteCallback={() => this.props.deleteLesson(lesson.url)}
                            />
                        ))}
                    </React.Fragment>
                }

            </React.Fragment>
        )
    }
}

export default LessonView
