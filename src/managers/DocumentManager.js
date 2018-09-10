/*  
    module: document manager
    author: riley mathews
    purpose: to create methods for handeling document data throughout the application
*/
import s3 from '../s3'
import APIManager from './APIManager';

const DocumentManager = Object.create(null, {

    // create new document method
    createDocument: {
        value: function (file, name, notes) {
            console.log("got to create document method")
            s3.upload({
                Key: file.name,
                Body: file,
                ACL: 'public-read'
            }, (err, data) => {
                if (err) {
                    console.log("error", err)
                } else {
                    console.log(data)
                    const itemToPost = {
                        name: name,
                        notes: notes,
                        s3_url: data.Location,
                    }
                    console.log(itemToPost)
                    APIManager.createItem(itemToPost, 'document')
                        .then(r => r.json())
                        .then(response => {
                            console.log(response)
                            this.addItemToState(response, 'documents')
                        })
                }
            })
        }
    },

    getTeachersDocuments: {
        value: function () {
            APIManager.getAuthCollection('document', '')
                .then(r => r.json())
                .then(response => {
                    this.setProviderState('documents', response)
                })
        }
    }

})

export default DocumentManager