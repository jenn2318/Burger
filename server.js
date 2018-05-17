let express = require("express");
let bodyParser = require("body-parser");


let PORT = process.env.PORT || 3000;

let app = express();

//Use for any static content for the app will be served from a public directory
app.use(express.static("public"));


//Middleware Body-Parser.
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Set Handlebars.
let exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import the routes and let the server access them.
let router = require('./controllers/burgers_controller.js');
app.use('/', router);


app.listen(PORT, function() {
    console.log("App now listening on localhost:" + PORT);
});
