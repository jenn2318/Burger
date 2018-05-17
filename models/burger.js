//Require The Dependency
let orm = require('../config/orm.js');

//This code will call the ORM functions using burger specific input for ORM to use.

let burger = {

    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(res) {
            callback(res);
        });
    },

    updateOne: function(burger_id, callback) {
        orm.updateOne(burger_id, function(res) {
            callback(res);
        });
    }

}

//Export for burger file

module.exports = burger;