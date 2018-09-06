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
                    console.log(response)
                    this.setProviderState("teacherLessons", response)
                })
        }
    }, 

    createNewLesson: {
        value: function(lesson) {
            APIManager.createItem(lesson, "lesson")
                .then(r => r.json())
                .then(response => {
                    console.log(response)
                })
        }
    },

})

export default LessonManager