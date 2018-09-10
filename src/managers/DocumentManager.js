/*  
    module: document manager
    author: riley mathews
    purpose: to create methods for handeling document data throughout the application
*/
import s3 from '../s3'
import APIManager from './APIManager';

const DocumentManager = Object.create(null, {

    // create teacher subdirectory in bucket, for use on registration
    // creates a promise
    _registerCreateDirectory: {
        value: function (name) {
            return new Promise((resolve, reject) => {
                console.log(name)
                const directoryKey = encodeURIComponent(name) + '/'
                s3.putObject({ Key: directoryKey }, (err, data) => {
                    console.log(err)
                    console.log(data)
                    if (err) {
                        resolve(false)
                    } else {
                        resolve(true)
                    }
                })
            })

        }
    },

    // create new document method
    createDocument: {
        value: function (file, name, notes) {
            console.log("got to create document method")
            // create key to post based on username and file name
            const fileKey = `${this.state.user.username}/${file.name}`

                s3.upload({
                    Key: fileKey,
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
                }) //closes upload call
            }
        },

        addDocumentToLesson: {
            value: function (documentUrl, lessonUrl) {
                const itemToPost = {
                    lesson: lessonUrl,
                    document: documentUrl
                }
                APIManager.createItem(itemToPost, 'lesson_document')
                    .then(r => r.json())
                    .then(response => {
                        console.log(response)
                        this.updateItemInStateArrayFromAPI(lessonUrl, 'teacherLessons')
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