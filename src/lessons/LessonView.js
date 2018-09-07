import React, { Component } from 'react'
import Lesson from './Lesson';
import LessonDetail from './LessonDetail';


class LessonView extends Component {

    state = {
        detailView: false,
        detailLesson: {},
    }

    setDetailLessonView = (id) => {
        const lesson = this.props.lessons.find(lesson => lesson.id === id)
        this.setState({
            detailView: true,
            detailLesson: lesson
        })
    }

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
                        lesson={this.state.detailLesson}
                        setListView={this.setListView}
                    />
                :
                    <React.Fragment>
                        {this.props.lessons.map(lesson => (
                            <Lesson
                                key={lesson.id}
                                lesson={lesson}
                                routeTo={this.props.routeTo}
                                setDetailLessonView={this.setDetailLessonView}
                            />
                        ))}
                    </React.Fragment>
                }

            </React.Fragment>
        )
    }
}

export default LessonView
