import APIManager from "./APIManager";

/*  
    module: lesson manager
    author: riley mathews
    purpose: to create methods that interact with lesson data throughout the application
*/

const LessonManager = Object.create(null, {

    getTeachersLessons: {
        value: function() {
            APIManager.getAuthCollection("lesson", "filter_by_auth=true")
                .then(r => r.json())
                .then(response => {
                    this.setProviderState("teacherLessons", response)
                })
        }
    }, 

    createNewLesson: {
        value: function(lesson) {
            APIManager.createItem(lesson, "lesson")
                .then(r => r.json())
                .then(response => {
                    this.addNewTeacherLessonToState(response)
                })
        }
    },

    addNewTeacherLessonToState: {
        value: function (lesson) {
            const oldLessons = [...this.state.teacherLessons]
            oldLessons.push(lesson)
            this.setProviderState("teacherLessons", oldLessons)
        }
    },

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
                    console.log(response)
                    this.addItemToState(response, "assignments")
                })
        }
    }

})

export default LessonManager