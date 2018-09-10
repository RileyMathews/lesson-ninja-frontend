import React, { Component } from 'react'
import s3 from '../s3'


class DocumentForm extends Component {

    upload = (evt) => {
        evt.preventDefault()
        const file = document.getElementById("file").files[0]
        console.log(file)
        s3.upload({
            Key: file.name,
            Body: file,
            ACL: 'public-read'
        }, function(err, data) {
            if (err) {
                console.log("error", err)
            } else {
                console.log(data)
            }
        })
    }


    render() {
        return (
            <React.Fragment>
                <h1>document form</h1>
            </React.Fragment>
        )
    }
}

export default DocumentForm
