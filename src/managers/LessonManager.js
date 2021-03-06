import APIManager from "./APIManager";
import DateManager from "./DateManager";

/*  
    module: lesson manager
    author: riley mathews
    purpose: to create methods that interact with lesson data throughout the application
*/

const LessonManager = Object.create(null, {

    // method to get all lesson objects based on the current teacher
    getTeachersLessons: {
        value: function() {
            APIManager.getAuthCollection("lesson", "filter_by_auth=true")
                .then(r => r.json())
                .then(response => {
                    this.setProviderState("lessons", response)
                })
        }
    }, 

    // method to create a new lesson
    createNewLesson: {
        value: function(lesson) {
            APIManager.createItem(lesson, "lesson")
                .then(r => r.json())
                .then(response => {
                    this.addItemToState(response, 'lessons')
                    this.popAlert(`Created lesson '${response.name}'`)
                })
        }
    },

    // method to update a lesson upon being edited by a teacher
    updateLesson: {
        value: function (newLesson) {
            APIManager.updateAuthItem(newLesson.url, newLesson)
                .then(r => r.json())
                .then(response => {
                    const oldLessonsState = [...this.state.lessons]
                    const index = oldLessonsState.findIndex(l => l.id === newLesson.id)
                    oldLessonsState[index] = response
                    this.setState({lessons: oldLessonsState})
                })
        }
    },

    findAssignment: {
        value: function (lessonURL, studentURL) {
            const assignments = [...this.state.assignments]
            return assignments.find(assignment => lessonURL === assignment.lesson.url && studentURL === assignment.student.url)
        }
    },

    // method to assign a lesson to a student
    assignLesson: {
        value: function (lessonURL, studentURL) {
            const dataToPost = {
                lesson: lessonURL,
                student: studentURL,
                confirmed: true,
                has_opened: false,
            }
        APIManager.createItem(dataToPost ,"student_lesson")
                .then(r => r.json())
                .then(response => {
                    // this.addItemToState(response, "assignments")
                    if (!response.non_field_errors) {
                        const oldAssignments = [...this.state.assignments]
                        oldAssignments.push(response)
                        this.setState({assignments: oldAssignments})
                    }
                })
        }
    }, 

    // method to cancel an assignment
    cancelAssignment: {
        value: function (lessonURL, studentURL) {
            const assignmentToDelete = this.findAssignment(lessonURL, studentURL)
            APIManager.deleteAuthItem(assignmentToDelete.url)
            this.removeItemFromStateByUrl(assignmentToDelete.url, 'assignments')
        }
    },

    // method to mark an assignment as complete
    completeAssignment: {
        value: function (lessonURL, studentURL) {
            const assignment = this.findAssignment(lessonURL, studentURL)
            const now = DateManager.stringDate()
            const data = {
                lesson: lessonURL,
                student: studentURL,
                has_opened: true,
                finished_on: now
            }
            APIManager.updateAuthItem(assignment.url, data)
                .then(r => r.json())
                .then(response => {
                    this.updateItemInStateArray(response, 'assignments')
                })
        }
    },

    // method to get assignments
    // works for both teachers and students
    // for teachers will return all assignments they have created
    // for students will return all assignments assigned to them
    getAssignments: {
        value: function () {
            APIManager.getAuthCollection("student_lesson", "users=true")
                .then(r => r.json())
                .then(response => {
                    this.setProviderState("assignments", response)
                })
        }
    },

    // method that takes an argument of the url for a lesson, and calls 
    // api method to delete it
    deleteLesson: {
        value: function (url) {
            APIManager.deleteAuthItem(url)
            this.removeItemFromStateByUrl(url, 'lessons')
        }
    },

    openAssignment: {
        value: function (assignment) {
            const assignmentToUpdate = {
                lesson: assignment.lesson.url,
                student: assignment.student.url,
                finished_on: assignment.finished_on,
                has_opened: true
            }
            APIManager.updateAuthItem(assignment.url, assignmentToUpdate) 
        }
    }

})

export default LessonManager