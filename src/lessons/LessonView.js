import React, { Component } from 'react'
import Lesson from './Lesson';
import LessonDetail from './LessonDetail';


class LessonView extends Component {

    state = {
        detailView: false,
        detailLessonId: 0,
    }

    setDetailLessonView = (id) => {
        this.setState({
            detailView: true,
            detailLessonId: id
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
                        lesson={this.props.lessons.find(lesson => lesson.id === this.state.detailLessonId)}
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
