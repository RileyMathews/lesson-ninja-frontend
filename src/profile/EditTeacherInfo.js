import React, { Component } from 'react'

/*  
    module: edit teacher info
    author: riley mathews
    purpose: to show current teacher profile information and allow user to edit
*/


class EditTeacherInfo extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>Teacher Profile</h1>
                <p>bio: {this.props.teacher.bio} <span id="teacher__bio" onClick={this.props.startEditingValue}>Edit</span></p>
                <p>street: {this.props.teacher.street} <span id="teacher__street" onClick={this.props.startEditingValue}>Edit</span></p>
                <p>city: {this.props.teacher.city} <span id="teacher__city" onClick={this.props.startEditingValue}>Edit</span></p>
                <p>region: {this.props.teacher.region} <span id="teacher__region" onClick={this.props.startEditingValue}>Edit</span></p>
                <p>country: {this.props.teacher.country} <span id="teacher__country" onClick={this.props.startEditingValue}>Edit</span></p>
                <p>zip_code: {this.props.teacher.zip_code} <span id="teacher__zip_code" onClick={this.props.startEditingValue}>Edit</span></p>
            </React.Fragment>
        )
    }
}

export default EditTeacherInfo
