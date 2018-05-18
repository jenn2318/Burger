let connection = require('./connection.js');


//Query to grab all the burgers

let orm = {

    selectAll: function(callback) {
        connection.query("SELCT * FROM burgers", function(err, result){
            if (err) throw (err);
            callback(result);
        });
    },

    //Query to insert the burger

    insertOne: function(burger_name, callback) {
        connection.query('INSERT INTO burgers SET ?', function(err, result) {
            burger_name: burger_name;
                devoured: false;
            if (err) throw (err);
            callback(result);
        }); //function(err, result) {
            //if (err) throw (err);
            //callback(result);
        //});

    },


    //Query to update the burger

    updateOne: function(burgerID, callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function(err, result) {
           if (err) throw (err);
           callback(result);
        });
    }


}

//Exporting the ORM object functions
module.exports = orm;