var orm = require("../config/orm.js");

var burger = {
    // Select all burgers in database
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    // Insert name of new burger
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    // Update condition of burger row
    // The objColVals is an object specifying columns as object keys with associated values
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the functions for burgers_controller.js
module.exports = burger;