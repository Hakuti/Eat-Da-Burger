var express = require("express");
var data = require("../public/data.js");
var router = express.Router();
var burger = require("../models/burger.js");

// Import the model (cat.js) to use its database functions.
// var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  // cat.all(function(data) {
  //   var hbsObject = {
  //     cats: data
  //   };
  // console.log(hbsObject);
  // res.render("index", hbsObject);
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
  // });
});

router.post("/create", function(req, res) {
  console.log(req.body.burger);
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger, false],
    result => {
      res.redirect("/");
    }
  );
});

router.put("/devouredBurger/:id", function(req, res) {
  const condition = "id = " + req.params.id;
  const devouredState = req.body.devoured;
  burger.update({ devoured: devouredState }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
  //console.log(req.body.id);
});
module.exports = router;
