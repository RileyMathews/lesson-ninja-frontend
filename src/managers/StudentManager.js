import APIManager from "./APIManager";

/*  
    module: student manager
    author: riley mathews
    purpose: to hold methods pertaining to student information throughout the application
*/

const StudentManager = Object.create(null, {

    // method to add a student to the currently logged in teacher
    addStudentToTeacher: {
        value: function (student) {
            console.log(student)
            const dataToPost = {
                teacher: this.state.teacher.url,
                student: student.url,
                confirmed: true
            }
            APIManager.createItem(dataToPost, "teacher_student")
                .then(r => r.json())
                .then(response => {
                    console.log(response)
                    this.addStudentToTeacherState(student)
                })
        }
    },

    // method to add a student to the teacher object in state
    addStudentToTeacherState: {
        value: function (student) {
            const teacher = {...this.state.teacher}
            teacher.students.push(student)
            this.setProviderState("teacher", teacher)
        }
    }

})

export default StudentManager