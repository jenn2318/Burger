let express = require('express');
let routes = express.Routes();
let burger = require('../models/burger.js');


//Let's make some routes

routes.get('/', function (req, res) {
    res.send('/index');
});

// Send all my burgers to the DOM

routes.get('/index', function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {burgers: data};
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});


// We will make a new burger
routes.post('/buger/make', function(req, res) {
    burger.insertOne(req.body.burger_name, function(){
        res.send('/index');
    });
});


//We will devour a burger
routes.post('/burger/eat/:id', function(req, res) {
    burger.updateOne(req.params.id, function(){
        res.send('/index');
    });
});


//Export the routes
module.exports = routes;