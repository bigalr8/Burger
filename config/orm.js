var connection = require("../config/connection.js");

var orm = {
    all: 
    function(tableOne,cb) {
        console.log("orm.js all:function(){")
        console.log(tableOne)
        var queryString =
        "SELECT * from ??";
        //select * from ??burgers
        connection.query(
        queryString,
        [tableOne],

            function(err, result) {
                 
                if (err) throw err;
                console.log("orm.js connection.query function")
                console.log("queryString: " + queryString);
                console.log(result);
                cb(result);
            }
           
        );
    },//end function 



    create: function(tableOne, tableOneCol, tableOneCol,valOfCol, valOfCol) {
        var queryString =
        "INSERT INTO ?? (??, ??) VALUES (??, ??)";
        //insert into ??burgers (??name,??devoured) values (??whatToInsert, ??"false")
        connection.query(
        queryString,
        [tableOne,tableOneCol,tableOneCol,valOfCol, valOfCol],
        function(err, result) {
            if (err) throw err;
            console.log(queryString);
            console.log(result);
            cb(result);
        }
        );
    },


    update: function(tableOne, tableOneCol, valOfCol, colToSearech, valOfCol) {
        var queryString =
        "UPDATE ?? SET ?? = ?? WHERE ??.id = ??";
        //update ??burgers set ??devoured = ??"true" where ??burger.id = ??whatToUpdate
        connection.query(
        queryString,
        [tableOne,tableOneCol,valOfCol,colToSearech, valOfCol],
        function(err, result) {
            if (err) throw err;
            console.log(queryString);
            console.log(result);
            cb(result);
        }
        );
    },

};

module.exports = orm;