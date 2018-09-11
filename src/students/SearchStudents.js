import React, { Component } from 'react'
import { Field, Label, Control, Input, Button } from 'bloomer'
import APIManager from '../managers/APIManager';
import StudentSearchResult from './StudentSearchResult';
import { Context } from '../Provider';

/*  
    module: search students
    author: riley mathews
    purpose: to generate a component that allows teachers to search for student usernames and add them as a student
*/



class SearchStudents extends Component {

    state = {
        query: "",
        results: []
    }


    submitForm = (evt) => {
        evt.preventDefault()
        APIManager.searchStudents(this.state.query)
            .then(r => r.json())
            .then(response => {
                console.log(response)
                this.setState({ results: response })
            })
    }

    updateForm = (evt) => {
        const query = { ...this.state }
        query[evt.target.name] = evt.target.value
        this.setState(query)
    }


    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitForm}>
                    <Field>
                        <Label>Name</Label>
                        <Control>
                            <Input type="text" name="query" onChange={this.updateForm} value={this.state.query} placeholder='search' />
                        </Control>
                    </Field>
                    <Field>
                        <Control>
                            <Button type="submit">Search</Button>
                        </Control>
                    </Field>
                </form>

                <Context.Consumer>
                    {context => (
                        <React.Fragment>
                            {this.state.results.map(student => (
                                <StudentSearchResult
                                    addStudentToTeacher={context.addStudentToTeacher}
                                    key={student.id}
                                    student={student}
                                />
                            ))}
                        </React.Fragment>
                    )}

                </Context.Consumer>

            </React.Fragment>
        )
    }
}

export default SearchStudents
