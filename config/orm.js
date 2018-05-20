let connection = require('./connection.js');


//Query to grab all the burgers

let orm = {

    selectAll: function(table, callback) {
        connection.query("SELECT * FROM burgers", function(err, result){
            if (err) throw (err);
            //console.log(result);
            callback(result);
        });
    },

    //Query to insert a new the burger

    insertOne: function(burger_name, callback) {
        let query = `INSERT INTO burgers (burger_name) VALUES (?)`;
        connection.query(query, burger_name, function(err, result) {
            if (err) throw err;
            //console.log("orm.s insertone: " + result);
            callback(result);
        });
    },


    //Query to update and delete the burger

    updateOne: function(burgerID, callback) {
        connection.query(`UPDATE burgers SET devoured =? WHERE id =?`,[1,burgerID] , function(err, result) {
            if (err) throw (err);
            console.log(result);
            callback(result);
        });
    },

    deleteOne: function(burgerID, callback) {
        connection.query('DELETE FROM TABLE ? WHERE ?', [{devoured: true}, {id: id}], function(err, result) {
            if (err) throw (err);
            console.log(result);
            callback(result);
        });
    }

}

//Exporting the ORM object functions
module.exports = orm;