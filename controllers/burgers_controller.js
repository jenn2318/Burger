let express = require('express');
let router = express.Router();
let burger = require('../models/burger.js');


//Let's make some routes

router.get("/", function (req, res) {

    // res.render('index');
    burger.selectAll(function(data) {
        let hbsObject = {burger: data};
        res.render('index', hbsObject);
    });
});

// Send all my burgers to the DOM

//router.get("/index", function(req, res) {
  //  burger.selectAll(function(data) {
    //    let hbsObject = {burger: data};
      //  res.render('index', hbsObject);
    //});
//});


// We will make a new burger
router.post("/api/burgers/", function(req, res) {
    burger.insertOne(req.body.burger_name, function(){
        res.redirect('/');
    });
});


//We will devour a burger
router.post("/api/burgers/eat/:id", function(req, res) {
    burger.updateOne(req.params.id, function(){
        res.redirect('/');
    });
});


//We will delete a burger
router.post("/api/burgers/delete/:id", function(req, res) {
    burger.deleteOne(req.params.id, function(){
        res.redirect('/');
    });
});


//Export the routes
module.exports = router;