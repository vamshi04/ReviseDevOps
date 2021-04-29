const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Vamshi_Sample", { useNewUrlParser: true }, (error) =>{
    if(!error){
        console.log("MongoDB Connection: Success");
    }
    else{
        console.log("Error connecting to database");
    }
});


const Course = require("./course.model"); 