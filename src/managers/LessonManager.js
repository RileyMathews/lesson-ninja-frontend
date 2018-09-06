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
    }

})

export default LessonManager