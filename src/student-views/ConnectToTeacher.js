import React, { Component } from 'react'
import { Input, Button } from 'bloomer';
import { Context } from '../Provider';


class ConnectToTeacher extends Component {

    state = {
        connection_key: ""
    }

    updateState = (evt) => {
        this.setState({ connection_key: evt.target.value })
    }


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>Add your teacher</h1>
                        <Input type="text" name="connection_key" value={this.state.connection_key} onChange={this.updateState} />
                        <Button onClick={() => context.connectStudentToTeacher(this.state.connection_key)}>Connect</Button>
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default ConnectToTeacher
