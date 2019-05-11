 
var orm = require("../config/orm.js");

var burger = {
  all:function(cb) {
      console.log("burger.js burger all:function");
    
      orm.all("burgers", function(res) {
        console.log("burger.js orm.all (function)");
        cb(res);
      });//end orm.all

     
  },//end function

  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },//end create

  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      console.log(orm.update);
      cb(res);
    });
  }//end update 
};//end burger

 
module.exports = burger;
