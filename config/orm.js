var connection = require("../config/connection.js");

var orm = {
    all: function(tableOne) {
        var queryString =
        "SELECT * from ??";
        //select * from ??burgers
        connection.query(
        queryString,
        [tableOne],
        function(err, result) {
            if (err) throw err;
            console.log(queryString);
            console.log(result);
        }
        );
    },



    create: function(tableOne, tableOneCol, tableOneCol,valOfCol, valOfCol) {
        var queryString =
        "INSERT INTO ?? (??, ??) VALUES (??, ??)";
        //insert into ??burgers (??burger_name,??devoured) values (??whatToInsert, ??"false")
        connection.query(
        queryString,
        [tableOne,tableOneCol,tableOneCol,valOfCol, valOfCol],
        function(err, result) {
            if (err) throw err;
            console.log(queryString);
            console.log(result);
        }
        );
    },


    update: function(tableOne, tableOneCol, valOfCol, tableOneCol, colToSearech, valOfCol) {
        var queryString =
        "UPDATE ?? SET ?? = ?? WHERE ??.id = ??";
        //update ??burgers set ??devoured = ??"true" where ??burger.id = ??whatToUpdate
        connection.query(
        queryString,
        [tableOne,tableOneCol,valOfCol,tableOneCol,valOfCol,colToSearech, valOfCol],
        function(err, result) {
            if (err) throw err;
            console.log(queryString);
            console.log(result);
        }
        );
    },

};

module.exports = orm;