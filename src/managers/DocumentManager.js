/*  
    module: document manager
    author: riley mathews
    purpose: to create methods for handeling document data throughout the application
*/
import s3 from '../s3'
import APIManager from './APIManager';

const DocumentManager = Object.create(null, {

    // create teacher subdirectory in bucket, for use on registration
    // creates a promise that returns false if the folder on s3 could not be created
    // that will then stop the registration function that called it
    _registerCreateDirectory: {
        value: function (name) {
            return new Promise((resolve, reject) => {
                const directoryKey = encodeURIComponent(name) + '/'
                s3.putObject({ Key: directoryKey }, (err, data) => {
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
            // create key to post based on username and file name
            const fileKey = `${this.state.teacher.s3_user_key}/${file.name}`

            // get file extension
            const extension = file.name.split(".").pop()
            // default s3 content type
            let contentType = "application/octet-stream"

            // set content type based on the file extension
            if (extension === 'html') contentType = "text/html";
            if (extension === 'css') contentType = "text/css";
            if (extension === 'js') contentType = "application/javascript";
            if (extension === 'png' || extension === 'jpg' || extension === 'gif') contentType = "image/" + extension;
            if (extension === 'pdf') contentType = "application/pdf"
            if (extension === 'mp3') contentType = "audio/mpeg3"
            if (extension === 'wav') contentType = "audio/wav"

            s3.upload({
                Key: fileKey,
                Body: file,
                ACL: 'public-read',
                ContentType: contentType
            }, (err, data) => {
                if (err) {
                } else {
                    const itemToPost = {
                        name: name,
                        notes: notes,
                        s3_url: data.Location,
                        s3_key: fileKey,
                        file_extension: extension
                    }
                    // take the information s3 returned about the new file and post it to our database
                    APIManager.createItem(itemToPost, 'document')
                        .then(r => r.json())
                        .then(response => {
                            this.addItemToState(response, 'documents')
                            this.popAlert("Document uploaded")
                        })
                }
            }) //closes upload call
        }
    },


    // method to add a document to a lesson
    addDocumentToLesson: {
        value: function (documentUrl, lessonUrl) {
            const itemToPost = {
                lesson: lessonUrl,
                document: documentUrl
            }
            APIManager.createItem(itemToPost, 'lesson_document')
                .then(r => r.json())
                .then(response => {
                    this.updateItemInStateArrayFromAPI(lessonUrl, 'lessons')
                })
        }
    },

    removeDocumentFromLesson: {
        value: function (lessonId, documentId, lessonUrl) {
            APIManager.getAuthCollection("lesson_document", `lesson=${lessonId}&document=${documentId}`)
                .then(r => r.json())
                .then(response => {
                    APIManager.deleteAuthItem(response[0].url)
                        .then(r => {
                            this.updateItemInStateArrayFromAPI(lessonUrl, 'lessons')
                        })
                })
        }
    },

    // method to get all documents based on the currently logged in teacher
    getTeachersDocuments: {
        value: function () {
            APIManager.getAuthCollection('document', '')
                .then(r => r.json())
                .then(response => {
                    this.setProviderState('documents', response)
                })
        }
    },

    // method to search for a document in a lesson and return true or false based on if it is already in there
    isDocInLesson: {
        value: function (doc, lesson) {
            const index = lesson.documents.findIndex(document => doc.id === document.id)
            return index === -1 ? false : true
        }
    },

    deleteDocument: {
        value: function (document) {
            const itemKey = document.s3_key
            s3.deleteObject({ Key: itemKey }, (err, data) => {
                if (err) {
                    this.popAlert(`There was an error deleting your document ${err}`)
                }
                APIManager.deleteAuthItem(document.url)
                this.removeItemFromStateByUrl(document.url, 'documents')
            });
        }
    },



})

export default DocumentManager