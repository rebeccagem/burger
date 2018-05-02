var connection = require("./connection.js");

var orm = {
selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString,[tableInput], function(err,result) {
        if (err) cb(err, null)

        cb(null, result);
    });
    }
};

module.exports = orm;