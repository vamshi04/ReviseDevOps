const mongoose = require("mongoose");

var CourseSchema = new mongoose.Schema({
    courseName : {
        type : String,
        required : "Required"
    },

    courseId : {
        type : String
    },

    courseDuration : {
        type : String
    },

    courseFee : {
        type : String
    }
})

mongoose.model("Course", CourseSchema) // => name of the collection and records should of the schema provided above
