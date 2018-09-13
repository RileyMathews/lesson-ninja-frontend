import React, { Component } from 'react'
import { Input, Button } from 'bloomer'


class TextAndEdit extends Component {

    state = {
        editing: false,
        newValue: "",
    }

    updateValue = () => {
        this.props.editCallback(this.state.newValue)
        this.setState({editing: false})
    }

    updateLocalValue = (evt) => {
        this.setState({ newValue: evt.target.value })
    }

    componentDidMount() {
        this.setState({ newValue: this.props.text })
    }


    render() {
        return (
            <React.Fragment>
                {this.state.editing ?
                    <React.Fragment>
                        <Input className="inline input-small" type="text" value={this.state.newValue} onChange={this.updateLocalValue} />
                        <Button className="inline" onClick={this.updateValue}>Update</Button>
                    </React.Fragment>
                    :
                    <span>{this.props.keyText} {this.props.text}</span>
                }
                <Button className="inline" isSize="small" onClick={() => this.setState({editing: !this.state.editing})}>edit</Button>
            </React.Fragment>
        )
    }
}

export default TextAndEdit
