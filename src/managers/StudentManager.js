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
            const teacher = { ...this.state.teacher }
            teacher.students.push(student)
            this.setProviderState("teacher", teacher)
        }
    },

    removeStudentFromTeacher: {
        value: function (student) {
            APIManager.getAuthCollection("teacher_student", `teacher=${this.state.teacher.id}&student=${student.id}`)
                .then(r => r.json())
                .then(response => {
                    console.log(response)
                    APIManager.deleteAuthItem(response[0].url)
                    this.removeStudentFromTeacherState(student)
                })
        }
    },

    removeStudentFromTeacherState: {
        value: function (student) {
            const teacher = { ...this.state.teacher }
            const index = teacher.students.findIndex(item => parseInt(item.id, 10) === parseInt(student.id, 10))
            teacher.students.splice(index ,1)
            this.setState({teacher: teacher})
        }
    },

    getStudentsAssignments: {
        value: function (studentUrl) {
            return [...this.state.assignments.filter(assignment => assignment.student.url === studentUrl)]
        }
    },

    isStudentOnLesson: {
        value: function (lesson, student) {
            console.log("checking for assignment")
            const index = this.state.assignments.findIndex(assignment => assignment.student.url === student.url && assignment.lesson.url === lesson.url)
            return index === -1 ? false : true
        }
    }
})

export default StudentManager