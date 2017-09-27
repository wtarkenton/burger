var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burger.js");


router.get("/", function(req, res) {
	burger.selectAll(function(data){
		console.log(data);
		res.render("index", { burger: data });	
	});
});


router.post("/create", function(req, res) {
	burger.insertOne([
			"burger_name"
		], [
			req.body.burger_name 
		], function() {
		 res.redirect("/");	
	});
});

router.put("/:id", function(req, res) {
  burger.updateOne(req.params.id, true, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});





// Export routes for server.js to use.
module.exports = router;


