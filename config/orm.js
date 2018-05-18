let connection = require('./connection.js');


//Query to grab all the burgers

let orm = {

    selectAll: function(callback) {
        connection.query("SELECT * FROM burgers", function(err, result){
            if (err) throw (err);
            callback(result);
        });
    },

    //Query to insert the burger

    insertOne: function(name, callback) {
        let query = `INSERT INTO burgers (burger_name, devoured) VALUES ('${name}', "false")`;

        connection.query(query, function(err, result) {
            if (err) throw err;
            callback(result);
        });
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