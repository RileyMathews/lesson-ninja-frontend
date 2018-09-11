import React, { Component } from 'react'
import UserManager from './managers/UserManager'
import StateManager from './managers/StateManager'
import LessonManager from './managers/LessonManager'
import StudentManager from './managers/StudentManager'
import DocumentManager from './managers/DocumentManager'
import history from './history'

/*
    module: context provider
    author: riley mathews
    purpose: to hold state at a top level in the application and pass that down to any component that would need to use it
*/

export const Context = React.createContext()

export class Provider extends Component {


    // The initial state of the data provider should include
    // default values for any top-level component that will
    // need the data. In this case, PoliticianList is my only
    // top-level component. It is not a child of any other
    // component.

    state = {
        authToken: "",

        user: {
            username: "",
            email: "",
            first_name: "",
            last_name: "",
            url: "",
        },

        teacher: {
            bio: "",
            street: "",
            city: "",
            region: "",
            country: "",
            zip_code: null,
            url: "",
            students: []
        },

        student: {
            url: ""
        },

        teacherLessons: [],
        assignments: [],
        documents: [],

    }

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.getProfileInformation(localStorage.getItem("token"))
            this.getAssignments()
        }
    }

    routeTo = (url) => {
        history.push(url)
    }

    /*  
        import methods from manager objects to be called and bound in this component
    */

    // user manager methods
    startRegistration = UserManager.startRegistration.bind(this)
    _registerCreateUserAndProfile = UserManager._registerCreateUserAndProfile.bind(this)
    login = UserManager.login.bind(this)
    getProfileInformation = UserManager.getProfileInformation.bind(this)
    updateUserProperty = UserManager.updateUserProperty.bind(this)

    // state manager methods
    setUserAndProfileState = StateManager.setUserAndProfileState.bind(this)
    clearUserInformation = StateManager.clearUserInformation.bind(this)
    setProviderState = StateManager.setProviderState.bind(this)
    addItemToState = StateManager.addItemToState.bind(this)
    updateItemInStateArrayFromAPI = StateManager.updateItemInStateArrayFromAPI.bind(this)
    removeItemFromStateByUrl = StateManager.removeItemFromStateByUrl.bind(this)

    // lesson manager methods
    createNewLesson = LessonManager.createNewLesson.bind(this)
    getTeachersLessons = LessonManager.getTeachersLessons.bind(this)
    addNewTeacherLessonToState = LessonManager.addNewTeacherLessonToState.bind(this)
    updateLesson = LessonManager.updateLesson.bind(this)
    assignLesson = LessonManager.assignLesson.bind(this)
    getAssignments = LessonManager.getAssignments.bind(this)
    deleteLesson = LessonManager.deleteLesson.bind(this)

    // student manager methods
    addStudentToTeacher = StudentManager.addStudentToTeacher.bind(this)
    addStudentToTeacherState = StudentManager.addStudentToTeacherState.bind(this)

    // document manager methods
    createDocument = DocumentManager.createDocument.bind(this)
    getTeachersDocuments = DocumentManager.getTeachersDocuments.bind(this)
    _registerCreateDirectory = DocumentManager._registerCreateDirectory.bind(this)
    addDocumentToLesson = DocumentManager.addDocumentToLesson.bind(this)
    isDocInLesson = DocumentManager.isDocInLesson.bind(this)
    deleteDocument = DocumentManager.deleteDocument.bind(this)

    /*
        This component will not render any DOM element itself.
        Rather it becomes a virtual wrapper around any component
        that wants to serve as the data provider for its children.
    */
    render() {
        return (
            <Context.Provider value={{
                // pass state
                state: this.state,

                // manager methods
                startRegistration: this.startRegistration,
                login: this.login,
                clearUserInformation: this.clearUserInformation,
                updateUserProperty: this.updateUserProperty,

                // lesson manager methods
                createNewLesson: this.createNewLesson,
                updateLesson: this.updateLesson,
                assignLesson: this.assignLesson,
                deleteLesson: this.deleteLesson,

                // student manager
                addStudentToTeacher: this.addStudentToTeacher,

                // document manager
                createDocument: this.createDocument,
                addDocumentToLesson: this.addDocumentToLesson,
                isDocInLesson: this.isDocInLesson,
                deleteDocument: this.deleteDocument,

                // other methods
                routeTo: this.routeTo,

            }}>
                {this.props.children}
            </Context.Provider>

        )
    }
}
