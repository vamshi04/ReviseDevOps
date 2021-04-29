const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CourseModel = mongoose.model("Course")

router.get("/add", (req, res)=>{
    
    res.render("add-course")
    // res.send('<link rel="shortcut icon" href="#" />')
})

router.post("/add", (req, res)=>{

    console.log(req.body)
    var course = new CourseModel();
    course.courseName = req.body.courseName;
    course.courseDuration = req.body.courseDuration;
    course.courseFee = req.body.courseFee;
    course.courseId = Math.ceil(Math.random() * 10000);
    course.save((err, doc)=>{
        if(!err){
            
            res.redirect("/course/list")
            // res.send('<link rel="shortcut icon" href="#" />')
        }
        else{
            res.send("error occured")
        }

    });
    res.render("add-course")
})

router.get("/list", (req, res) =>{
    
    //Setting : Debugging if data is rendered from server
    // var course = new CourseModel();
    // course.courseName = "JavaScript";
    // course.courseId = "4";
    // course.courseDuration = "2 Hrs";
    // course.courseFee = "5"
    // course.save();
    
    //Getting
    CourseModel.find((err, docs) => {
        if(!err){
            console.log(docs);
            
            // res.send("Course Controller")
            res.render("list", { data : docs })
            // res.send('<link rel="shortcut icon" href="#" />')
            // console.log(data);
        }
        else{
            // res.send('<link rel="shortcut icon" href="#" />')
            res.send("Error")
        }
    });
    // res.send("Course Controller")
});

module.exports = router;