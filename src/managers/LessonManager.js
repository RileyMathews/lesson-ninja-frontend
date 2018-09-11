import APIManager from "./APIManager";

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
                    this.setProviderState("teacherLessons", response)
                })
        }
    }, 

    // method to create a new lesson
    createNewLesson: {
        value: function(lesson) {
            APIManager.createItem(lesson, "lesson")
                .then(r => r.json())
                .then(response => {
                    this.addNewTeacherLessonToState(response)
                })
        }
    },

    // method that takes a lesson object, and adds it to the array in providers state
    addNewTeacherLessonToState: {
        value: function (lesson) {
            const oldLessons = [...this.state.teacherLessons]
            oldLessons.push(lesson)
            this.setProviderState("teacherLessons", oldLessons)
        }
    },

    // method to update a lesson upon being edited by a teacher
    updateLesson: {
        value: function (newLesson) {
            APIManager.updateAuthItem(newLesson.url, newLesson)
                .then(r => r.json())
                .then(response => {
                    const oldLessonsState = [...this.state.teacherLessons]
                    const index = oldLessonsState.findIndex(l => l.id === newLesson.id)
                    oldLessonsState[index] = response
                    this.setState({teacherLessons: oldLessonsState})
                })
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
                    this.addItemToState(response, "assignments")
                })
        }
    }, 

    // method to get assignments
    // works for both teachers and students
    // for teachers will return all assignments they have created
    // for students will return all assignments assigned to them
    getAssignments: {
        value: function () {
            APIManager.getAuthCollection("student_lesson")
                .then(r => r.json())
                .then(response => {
                    this.setProviderState("assignments", response)
                })
        }
    },

})

export default LessonManager