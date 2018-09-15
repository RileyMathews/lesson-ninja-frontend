import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Register from './auth-views/Register';
import Login from './auth-views/Login';
import ProfileEntry from './profile/ProfileEntry';
import LessonEntry from './lessons/LessonEntry';
import StudentManagementEntry from './students/StudentManagementEntry';
import HomePageEntry from './landing-page/HomePageEntry';
import DocumentEntry from './document-views/DocumentEntry';
import ConnectToTeacher from './student-views/ConnectToTeacher'

/*
    module: application views
    author: riley mathews
    purpose: to handle routing for the application
*/

class ApplicationViews extends Component {


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={HomePageEntry}/>
                <Route exact path="/profile" component={ProfileEntry}/>
                <Route exact path="/students" component={StudentManagementEntry}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/lessons" component={LessonEntry}/>
                <Route exact path="/documents" component={DocumentEntry}/>
                <Route exact path="/connect" component={ConnectToTeacher}/>
            </React.Fragment>
        )
    }
}

export default ApplicationViews