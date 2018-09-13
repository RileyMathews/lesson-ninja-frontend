import React, { Component } from 'react'
import {Box, Button} from 'bloomer'


class DropdownBox extends Component {


    render() {
        return (
            <React.Fragment>
                <Box>
                    <p>{this.props.text}</p>
                    {this.props.callback1 ? 
                        <Button onClick={this.props.callback1}>{this.props.callback1Text}</Button> : null
                    }
                    {this.props.callback2 ? 
                        <Button onClick={this.props.callback2}>{this.props.callback2Text}</Button> : null
                    }
                </Box>
            </React.Fragment>
        )
    }
}

export default DropdownBox
