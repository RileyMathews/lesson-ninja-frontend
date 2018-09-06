import React, { Component } from 'react'
import { Context } from '../Provider';
import EditProfile from './EditProfile';


class ProfileEntry extends Component {

    state = {
        showEdit: false,
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
                                <EditProfile
                                    updateUserProperty={context.updateUserProperty}
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
