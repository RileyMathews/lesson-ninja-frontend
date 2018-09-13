import React, { Component } from 'react'
import { Context } from '../Provider';
import Profile from './Profile';

/*  
    module: profile entry component
    author: riley mathews
    purpose: to be the entry point for profile view
*/

class ProfileEntry extends Component {

    state = {
        showEdit: true,
    }

    toggleEdit = () => {
        this.setState({showEdit: !this.state.showEdit})
    }


    render() {
        return (
            <React.Fragment>
                <Context.Consumer>
                    {context => (
                        <React.Fragment>
                        {
                            this.state.showEdit ?
                                <Profile
                                    context={context}
                                />
                                :
                                null
                        }
                        </React.Fragment>
                    )}
                </Context.Consumer>
            </React.Fragment>
        )
    }
}

export default ProfileEntry
