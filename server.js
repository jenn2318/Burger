let express = require("express");
let bodyParser = require("body-parser");


let port = process.env.PORT || 3000;

let app = express();

//If any static content for the app will be served from a public directory
app.use(express.static("public"));


//Middleware Body-Parser.
app.use(bodyParser.urlencoded({ extended: false});
app.user(bodyPareser.json());

//Set Handlebars.
let exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'});
app.set('view engine', handlebars);

//Import the routes and let the server access them.
let routes = require('./controllers/burgers_controllers.js');
app.use('/', routes;


app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});
