/*  
    module: date manager
    author: riley mathews
    purpose: to handel creating timestamps and other date/time things
*/

const DateManager = Object.create(null, {

    stringDate: {
        value: function () {
            const date = new Date()
            return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        }
    }

})

export default DateManager