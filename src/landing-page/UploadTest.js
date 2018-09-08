import React, { Component } from 'react'
import s3 from "../s3"


class UploadTest extends Component {

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
                <h1>uplaod test</h1>

                <form onSubmit={this.upload}>
                    <input id="file" type="file" />
                    <button type="submit">submit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default UploadTest
