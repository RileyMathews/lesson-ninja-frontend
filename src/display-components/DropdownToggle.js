import React, { Component } from 'react'
import {Button, Icon} from 'bloomer'


class DropdownToggle extends Component {


    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.callback} isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>{this.props.text}</span>
                    <Icon icon={this.props.active ? "angle-up" : "angle-down"} isSize="small" />
                </Button>
            </React.Fragment>
        )
    }
}

export default DropdownToggle
