let connection = require('./connection.js');


//Query to grab all the burgers

let orm = {

    selectAll: function(table, callback) {
        connection.query("SELECT * FROM burgers", function(err, result){
            if (err) throw (err);
            callback(result);
        });
    },

    //Query to insert a new the burger

    insertOne: function(burger_name, callback) {
        let query = `INSERT INTO burgers (burger_name, devoured) VALUES ('${burger_name}', 0)`;
        connection.query(query, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },


    //Query to update and delete the burger

    updateOne: function(burgerID, callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function(err, result) {
            if (err) throw (err);
            callback(result);
        });
    },

    deleteOne: function(burgerID, callback) {
        connection.query('DELETE FROM burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function(err, result) {
            if (err) throw (err);
            callback(result);
        });
    }

}

//Exporting the ORM object functions
module.exports = orm;