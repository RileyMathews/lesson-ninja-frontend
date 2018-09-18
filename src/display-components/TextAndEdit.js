import React, { Component } from 'react'
import { Input, Button } from 'bloomer'
import './TextAndEdit.css'


class TextAndEdit extends Component {

    state = {
        editing: false,
        newValue: "",
    }

    updateValue = (evt) => {
        evt.preventDefault()
        if (this.props.validationCallback) {
            if (this.props.validationCallback(this.state.newValue)) {
                this.props.editCallback(this.state.newValue)
                this.setState({ editing: false })
            }
        } else {
            this.props.editCallback(this.state.newValue)
            this.setState({ editing: false })
        }
        
    }

    updateLocalValue = (evt) => {
        this.setState({ newValue: evt.target.value })
    }

    componentDidMount() {
        this.setState({ newValue: this.props.text })
    }

    toggleEdit = () => {
        if (this.state.editing) {
            this.setState({editing: false})
        } else {
            this.setState({editing: true}, () => {
                document.getElementById(`text_edit_${this.props.keyText}`).focus()
            })
        }
    }


    render() {
        return (
            <div className="blocky">
                <span>{this.props.keyText}: {this.props.text}</span>
                <Button className="inline button-text-edit" isSize="small" onClick={this.toggleEdit}>{this.state.editing ? "cancel" : "edit"}</Button>
                {this.state.editing ?
                    <form className="inline" onSubmit={this.updateValue}>
                        <Input id={`text_edit_${this.props.keyText}`} required className="inline input-text-edit" type="text" value={this.state.newValue} onChange={this.updateLocalValue} />
                        <Button isSize="small" className="inline button-text-edit" type="submit">Update</Button>
                    </form>
                    :
                    null
                }
            </div>
        )
    }
}

export default TextAndEdit
