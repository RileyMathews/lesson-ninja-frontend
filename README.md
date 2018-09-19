# Lesson Ninja
This is the repository for the front end client app that powers lesson ninja. View the current live build at lesson.ninja

# Development setup
1. clone this repository
1. run the commands `npm install` and `npm start`
1. your development server should now be running on port 3000. 
1. running on any ports other than 3000 is likely to cause issues with the api

You will then need to visit the repository at https://github.com/RileyMathews/lesson-ninja-backend and follow the instructions there to complete development setup. The django server will need to be running at the default port of 8000 to correctly communicate with this app during development.

# Deployment setup
This app is deployed to an aws s3 bucket using the python script found at https://github.com/RileyMathews/react-automated-deployment 
The nessesary settings to run that script are found in this repos deployment.json file. 

# Lesson Ninja Overview
Lesson Ninja is an app built for teachers and students of private lessons. The teachers may sign up, create lessons, upload documents to those lessons. And then assign those lessons to their students. The students can then view their current assignments as well as assignment history, and view any document that has been attached to a lesson assigned to them. Teachers can see if a student as opened their assignments or not. 

# Developer Notes
The following is information about the overall design and workflow of developing this app

## High level data
Data pulled from the api is in the Provider.js file using reacts context provider api. It is then called in the app were nessesary and passed as props down to the lowest level components which are contained in the display-components directory. These components take the text and callback functions needed to handle the data and load it onto the DOM. 

## Data mangement objects
Any method that pertains to managing the data stored in the context provider are written in the files contained in the managers folder. Some of these objects are written in a way were they directly interact with the data being held in the context provider. Those objects are imported, their methods bound in that file, and then passed through context to the rest of the application. Then when they are called they effect the data being stored in that component. 

The objects that are bound in provider are
- DocumentManager
- LessonManager
- StateManager
- StudentManager
- UserManager

Other objects here are methods that can be used in the rest of the application without needing to be passed through provider first. These include
- APIManager
- DateManager
- ValidationManager

### Document Manager
Document manager holds methods to interact with documents and nessesary logic. 

#### _registerCreateDirectory
arguments
1. name -- string: the name of the s3 directory to be created.

This method is only called in the registration process by other methods. It takes the name passed to it and creates a directory in the s3 bucket where documents for that teacher will be uploaded to.

#### createDocument
arguments
1. file -- fileData: the data pulled from a file input component to be uploaded
1. name -- string: string containing the user defined name for the file
1. notes -- string: string containing user defined information about the process

Method takes in those arguments and first uploads the document to s3, if that upload is sucsessful it then takes information about that document including its s3 url that is returned and posts that information to the lesson ninja api.

#### addDocumentToLesson
arguments
1. documentUrl -- string: the url location of the document in the api
1. lessonUrl -- string: the url location of the lesson in the api

This method takes in those arguments, and creates an intersection relationship between that document and that lesson in the api. It then calls updateItemInStateArrayFromApi so the lesson object is freshly updated with its new document attached.

#### removeDocumentFromLesson
arguments
1. lessonId -- int or string: the id of the lesson the document is being removed from
1. documentId -- int or string: the id of the document being removed
1. lessonUrl -- string: the url location in the api of the lesson the document is being removed from

This method removes the document from the lesson and refreshes the lesson object from the api.

#### getTeachersDocuments
arguments
none

This method takes the users token from local storage and fetches their lessons from the api. It sets the documents into the appropiate array in provider.

#### isDocInLesson
arguments
1. doc -- obj: the document object
1. lesson -- obj: the lesson object

This method searches the appropiate lessons documents and returns true or false based on if the document is attached to that lesson or not. 

#### deleteDocument
arguments
1. document -- obj: the document object to be deleted

This method deletes the document sent to it from the lesson ninja api as well as the corresponding file in the teachers s3 bucket.

### Lesson Manager
Lesson manager contains methods pertaining to lessons throughout the application.

#### getTeachersLessons
arguments
none

This method takes the users auth token from local storage and fetches their lessons from the api.

#### createNewLesson
arguments
1. lesson -- obj: the lesson object to be created

This method creates a new lesson in the api and adds it to state accordingly.

#### updateLesson
arguments
1. nesLesson -- obj: the new lesson object

This method updates the lesson in the api and state accordingly

#### findAssignment
arguments
1. lessonURL -- string: the api url of the lesson
1. studentURL -- string: the api url of the student

This searches for an assignment of the student and lesson and returns that assignment if found. 

#### assignLesson
arguments
1. lessonURL -- string: the api url of the lesson
1. studentURL -- string: the api url of the student

This method creates an assignment between that student and that lesson in the api and in state.

#### cancelAssignment
arguments
1. lessonURL -- string: the api url of the lesson
1. studentURL -- string: the api url of the student

This method deletes the assignment between the student and lesson in the api and state.

#### completeAssignment
arguments
1. LessonURL -- string: the api url of the lesson
1. studentURL -- string: the api url of the student

This method marks the lesson as complete in the api and in state. In this application an assignment is completed when it has a finished_on date, an uncomplete assignments finished_on property will be null.

#### getAssignments
arguments
non

This method takes the users tokens and gets assignments pertaining to that user. For a teacher this means getting all assignments in which the lesson is one the teacher created. For a student this means getting all assignments in which they are the student. 

#### openAssignment
arguments
1. assignment -- obj: the assignment object

This method takes the has_opened property and marks it as true. It is then sen't to the api. 

### State manager
This object contains methods that can be generic enough to directly interact with various items being held in providers state.

#### setProviderState (to be deprecated)
arguments
1. key -- string: the key of the state item to be updated
1. value -- *: the value to be set in state

This method sets the data passed as value on the key provided in providers state. This method is not to be used in future updates as it started causing issues on initial app load. 

#### setUserAndProfileState
arguments
1. userData -- obj: an object holding user information
1. profileData -- obj: an object holding user profile data
1. profileType -- string: a string representation of the type of profile 'teacher' or 'student'
token -- string: the users auth token

This method takes the arguments passed to it and sets providers state accordingly. setting teacher or student profile based on the profile type passed in that argument. 

#### addItemToState
arguments
1. item -- *: an item to be added to an array in state
1. arrayKey -- string: a string matching a key of an array currently in state

This method takes the item passed to it and goes through the full set state process of adding that item to an array of the corresponding key in state.

#### clearUserInformation
arguments
none

This method clears all data from state pertaining to the previously logged in user.

#### updateItemInStateArrayFromAPI
arguments
1. url -- string: the url location of the item to be updated in the api
1. stateKey -- string: the key of the array in state to be updated

This method goes to the api and gets the data that is currently at that url. It then adds the response from the api to the corresponding array in state.

#### updateItemInStateArray
arguments
1. obj -- obj: the object to be updated in state
1. stateKey -- string: the key of the state array to be updated

This method takes the item passed as obj and finds the old item in the state array passed to it. it then updates that item and sets state again.

#### removeItemFromStateByUrl
arguments
1. url -- string: url of the item to be removed
1. stateKey -- string: the key of the state array to be updated

This method removes the item with the url passed to it from the array in state. 

### Student Manager
This object manages data pertaining to students from the teachers perspective

#### addStudentToTeacher
arguments
1. student -- obj: the student object to add

This method adds the student to the teacher in the api.

#### addStudentToTeacherState
arguments
1. student -- obj: the student object to add

This adds the student to the array of teachers students in state.

#### removeStudentFromTeacher
arguments
1. student -- obj: a student object

This method removes the student from the teacher in the api.

#### removeStudentFromTeacherState
arguments
1. student -- obj: a student object

This method removes the student from the teacher in state.

#### getStudentsAssignments
arguments
1. studentUrl -- string: the url location of the student in the api

This methods returns a filtered list of teachers assignments of which the student passed is the student. 

#### isStudentOnLesson
arguments
1. lesson -- obj: lesson object
1. student -- obj: student object

This method returns true or false based on if the student has an assignment with the lesson. 

#### isStudentWithTeacher
arguments
1. student -- obj: a student object

This method returns true or false based on if the student is currently attached to the logged in teacher. 

### User manager
This object holds methods pertaining to user data.

#### startRegistration
arguments
1. userData -- obj: object of user information
1. profileData -- obj: object of profile information
1. profileType -- string: type of profile

This method starts the process of registering a new user with the information given. 

#### _registerCreateUserAndProfile
arguments
1. userData -- obj: object of user information
1. profileData -- obj: object of profile information
1. profileType -- string: type of profile

This method is called from startRegistration. It handles posting all the user information passed to it to the correct endpoints in the api.

#### login
arguments
1. username -- string: a username
1. password -- string: a password

This method posts the information to the api and handles a returning of errors, or the users auth token.

#### logout
arguments
none

This method clears user information from app and re routes them to the homepage

#### getProfileInformation
arguments
1. token -- string: a users auth token

This method gets user information from the api and passes that information to set user and profile state method. Then if the user is a teacher it gets their lessons and documents. 

#### updateUserProperty
arguments
1. oldData -- obj: old user data
1. propertyToChange -- string: property that needs updating
1. newValue -- string: the new value of the property
1. stateKey -- string: the key of the parent object

This method goes through the full process nessesary to update the information in the api and in state.

#### connectStudentToTeacher
arguments
1. connection_key -- string: a teachers connection key

This method connects the logged in student with the teacher whos key they pass in.

#### changePassword
arguments
1. oldPassword -- string: users old password
1. newPassword -- string: users new password

This method posts the information to the change password endpoint

#### startResetPassword
arguments
1. email -- string: an email address

This method posts the email to the api endpoint to start the process of resetting a forgotten password

#### resetPassword
arguments
1. email -- string: users email address
1. code -- string: a code that was emailed to the user to reset their password
1. password -- string: new password

This method posts the information to the reset password endpoint and alerts the user if any errors occur

### API manager
API manager contains all methods that generate promises that interact with the lesson ninja api. View the information in the api repository for lesson ninja to view more information about specific endpoints. 

#### registerUser
arguments
1. user -- obj: user object

Posts the object to the register endpoint

#### loginUser
arguments
1. data -- obj: object of data needed by the login endpoint

Posts informatino to the login endpoint

#### getAuthCollection
arguments
1. itemUrl -- string: url of the item to get

Gets an item that requires authorization from the api

#### createItem
arguments
1. data -- obj: data to be posted
1. collection -- string: url past the root api url

creates data at the collection endpoint passed to it

#### updateAuthItem
arguments
1. itemUrl -- string: url of item to update
1. data -- obj: data to replace with

Generates a put request on the url with the data passed in

#### deleteAuthItem
arguments
1. itemUrl -- string: url of item to delete

returns a delete request for the specified item

#### searchStudents
arguments
1. query -- string: query to search by

returns a get request to the students endpoint with the supplied query as a filter parameter

### date manager
Date manager currently only contains one method stringDate which returns a string of the current date in the format needed by the django rest API.

### validation manager
contains methods that can be used to check if strings passed to them conform to restrictions. 

#### username
arguments
1. username -- string: username to check

returns true or false

#### name
arguments
1. name -- string: name to check

returns true or false