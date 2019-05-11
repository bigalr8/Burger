var express = require ('express');

var router = express.Router();

var burger = require ('../models/burger.js')



console.log("burger_controller.js")

// Create all our routes and set up logic within those routes where required.


//call router.get() - args: "/", function(req,res)
router.get("/", 
  //declare function() - {call burger.all() - args: function(data)} 
  function(req, res) {
      console.log("b_c.js router.get function");
      //declare burger.all() - {call res.render() - args: index, obj}
      burger.all(function(data) {
        console.log("b_c.js router.get function burger.all function");
        var hbsObject = 
        {
        burgers: data
        };
        console.log("hbsObject: ");
        console.log(hbsObject);
        res.render("index", hbsObject);
      });//end burger.all
  }//end function
  
);//end router.get
   
 
function nodeStyleCallback(err, data) {
  console.log("nodeStyleCallback")
  if (err) {
    console.error('There was an error', err);
    return;
  }
  console.log(data);
}
router.post("/api/burgers", function(req, res) {
  burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
    console.log("burger.create")
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("router.put condition: ", condition);


  burger.update(
    {
      
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
         
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

 

module.exports = router;