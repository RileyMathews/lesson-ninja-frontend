import React, { Component } from 'react'
import UserInfo from './UserInfo';
import { Context } from '../Provider';
import StudentInfo from './StudentInfo';
import TeacherInfo from './TeacherInfo';


class Profile extends Component {


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>Profile</h1>
                        <UserInfo 
                            user={context.state.user}
                        />
                        {context.state.user.is_student ? 
                            <StudentInfo 
                                student={context.state.student}
                            />
                            :
                            <TeacherInfo 
                                teacher={context.state.teacher}
                            />
                        }
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default Profile
