import React, { Component } from 'react'
import { Field, Label, Control, Button, Input } from 'bloomer'


class ProfileEditField extends Component {


    render() {
        return (
            <React.Fragment>
                <Field>
                    <Label>New {this.props.property}</Label>
                    <Control>
                        <Input id="profile_edit_field" type="text" name={this.props.property} value={this.props.value} onChange={this.props.updateEditValue} />
                    </Control>
                </Field>

                <Field isGrouped>
                    <Control>
                        <Button onClick={this.props.submitEdit} id="submit" isColor='primary'>Submit</Button>
                    </Control>

                    <Control>
                        <Button onClick={this.props.submitEdit} id="cancel" isColor='primary'>Cancel</Button>
                    </Control>
                </Field>
            </React.Fragment>
        )
    }
}

export default ProfileEditField
