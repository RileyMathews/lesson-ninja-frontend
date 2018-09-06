import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Register from './auth-views/Register';
import Login from './auth-views/Login';
import ProfileEntry from './profile/ProfileEntry';
import LessonEntry from './lessons/LessonEntry';
import LessonDetail from './lessons/LessonDetail';

/*
    module: application views
    author: riley mathews
    purpose: to handle routing for the application
*/

class ApplicationViews extends Component {


    render() {
        return (
            <React.Fragment>
                <Route exact path="/"/>
                <Route exact path="/profile" component={ProfileEntry}/>
                <Route exact path="/students" />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/lessons/" component={LessonEntry}/>
                <Route exact path="/lessons/:id" component={LessonDetail}/>
            </React.Fragment>
        )
    }
}

export default ApplicationViews