import React, { Component } from 'react'
import './Alert.css'


class Alert extends Component {


    render() {
        return (
            <React.Fragment>
                {this.props.alert.shown ?
                    <div id="alert">
                        <p>{this.props.alert.message}</p>
                    </div>
                    :
                    null
                }

            </React.Fragment>
        )
    }
}

export default Alert
