import React, { Component } from 'react'
import TextAndEdit from '../display-components/TextAndEdit';

/*  
    module: edit teacher info
    author: riley mathews
    purpose: to show current teacher profile information and allow user to edit
*/


class TeacherInfo extends Component {


    render() {
        return (
            <React.Fragment>
                <div id="teacher-info" className="profile-block">
                    <h1>Teacher Profile</h1>
                    <TextAndEdit
                        text={this.props.teacher.bio}
                        keyText="bio"
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.teacher, "bio", newValue, "teacher")}
                    />
                    <TextAndEdit
                        text={this.props.teacher.street}
                        keyText="street"
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.teacher, "street", newValue, "teacher")}
                    />
                    <TextAndEdit
                        text={this.props.teacher.city}
                        keyText="city"
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.teacher, "city", newValue, "teacher")}
                    />
                    <TextAndEdit
                        text={this.props.teacher.region}
                        keyText="region"
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.teacher, "region", newValue, "teacher")}
                    />
                    <TextAndEdit
                        text={this.props.teacher.country}
                        keyText="country"
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.teacher, "country", newValue, "teacher")}
                    />
                    <TextAndEdit
                        text={this.props.teacher.zip_code}
                        keyText="zip code"
                        editCallback={(newValue) => this.props.updateUserProperty(this.props.teacher, "bio", newValue, "teacher")}
                    />
                    <p>Your connection key is: {this.props.teacher.connection_key}</p>
                    <p>Give it to your students so they can connect to your account.</p>
                </div>
            </React.Fragment>
        )
    }
}

export default TeacherInfo
