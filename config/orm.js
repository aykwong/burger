var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput) {
        var query = "SELECT burger_name FROM ??";
        connection.query(query, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (tableInput, burgerName) {
        var query = "INSERT INTO ?? (burger_name) VALUES (?);";
        connection.query(query, [tableInput, burgerName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (tableInput, eaten) {
        var query = "UPDATE ?? SET devoured = ?";
        connection.query(query, [tableInput, eaten], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;