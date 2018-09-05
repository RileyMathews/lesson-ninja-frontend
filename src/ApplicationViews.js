import React, { Component } from 'react'
import { Route } from "react-router-dom"

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
                <Route exact path="/profile" />
                <Route exact path="/students" />
                <Route exact path="/lessons" />
            </React.Fragment>
        )
    }
}

export default ApplicationViews