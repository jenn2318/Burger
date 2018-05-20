let express = require('express');
let router = express.Router();
let burger = require('../models/burger.js');


//Let's make some routes

// router.get("/", function (req, res) {
//
//    res.render('index');
// });

// Send all my burgers to the DOM

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {burger: data};
        //console.log("burger_controller.js get: " + hbsObject);
        res.render('index', hbsObject);
    });
});


// We will make a new burger
router.post("/api/burgers", function(req, res) {
    console.log(req.body.burger_name);
       burger.insertOne(req.body.burger_name, function(result){
       // console.log("Post :" + result);
        res.redirect('/');

        //res.redirect('/index');
    });
});


//We will devour a burger
router.put("/api/burgers/eat/:id", function(req, res) {
    burger.updateOne(req.params.id, function(){
        console.log("burger_controller.js put:" + req.params.id);
        res.redirect('/');
    });
});


//We will delete a burger
//router.delete("/api/burgers/eat/:id", function(req, res) {
  //  burger.deleteOne(req.params.id, function(){
    //    res.redirect('/');
   // });
//});





//Export the routes
module.exports = router;