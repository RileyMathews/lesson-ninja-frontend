import React, { Component } from 'react'
import LessonSnippet from './LessonSnippet';
import LessonDetail from './LessonDetail';
import {Button} from 'bloomer'


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
                        assignLesson={this.props.assignLesson}
                    />
                    :
                    <React.Fragment>
                        {this.props.lessons.map(lesson => (
                            <React.Fragment key={`fragment__${lesson.id}`}>
                                <LessonSnippet
                                    key={lesson.id}
                                    lesson={lesson}
                                    routeTo={this.props.routeTo}
                                    setDetailLessonView={this.setDetailLessonView}
                                />
                                <Button key={`button__${lesson.id}`} onClick={() => this.setDetailLessonView(lesson.id)}>Details</Button>
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                }

            </React.Fragment>
        )
    }
}

export default LessonView
