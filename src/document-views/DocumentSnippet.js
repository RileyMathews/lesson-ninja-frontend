import React, { Component } from 'react'


class DocumentSnippet extends Component {


    render() {
        return (
            <React.Fragment>
                <div class="test">
                    <h1>document</h1>
                    <p>{this.props.document.name}</p>
                    <a href={this.props.document.s3_url} target="blank">view</a>
                    <span>   </span>
                    <a href={this.props.document.s3_url} download>download</a>
                </div>
            </React.Fragment>
        )
    }
}

export default DocumentSnippet
