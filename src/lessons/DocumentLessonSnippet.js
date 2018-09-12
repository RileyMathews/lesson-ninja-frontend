import React, { Component } from 'react'
import { Button, Box } from 'bloomer';


class DocumentLessonSnippet extends Component {


    render() {
        return (
            <React.Fragment>
                <Box>
                    <h1>document {this.props.document.name}</h1>
                    {this.props.docOnLesson ?
                        <Button onClick={() => this.props.removeDocumentFromLesson(this.props.lesson.id, this.props.document.id, this.props.lesson.url)}>Remove</Button>
                        :
                        <Button onClick={() => this.props.addDocumentToLesson(this.props.document.url, this.props.lesson.url)}>Add</Button>
                    }
                    
                </Box>
            </React.Fragment>
        )
    }
}

export default DocumentLessonSnippet
