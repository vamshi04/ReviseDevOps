// express
// express-handlerbars
// body-parser
// nodemon

const connection = require("./model");
const express = require("express");
const app = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const CourseRouter = require("./routes/courses")

app.use(bodyparser.urlencoded({
    extended : true
}));

app.set("views", path.join(__dirname, "/views/")); //_dirname => global variable given by node JS

app.engine("hbs", expressHandlebars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));

app.set("view engine", "hbs");

app.get("/", (req,res) => {
    // res.send("<h1> Welcome to the StudyLab <h1>")
    // res.send('<link rel="shortcut icon" href="#"></link>')
    res.render("index", {})
});

app.use("/course", CourseRouter);

app.get('/favicon.ico', (req, res) => res.status(204));

app.listen("3000", () => {
    console.log("Server started");
});

