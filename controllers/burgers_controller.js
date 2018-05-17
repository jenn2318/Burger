let express = require('express');
let router = express.Router();
let burger = require('../models/burger.js');


//Let's make some routes

router.get('/', function (req, res) {
    res.redirect('/index');
});

// Send all my burgers to the DOM

router.get('/index', function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {burgers: data};
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});


// We will make a new burger
router.post('/buger/make', function(req, res) {
    burger.insertOne(req.body.burger_name, function(){
        res.redirect('/index');
    });
});


//We will devour a burger
router.post('/burger/eat/:id', function(req, res) {
    burger.updateOne(req.params.id, function(){
        res.redirect('/index');
    });
});


//Export the routes
module.exports = router;