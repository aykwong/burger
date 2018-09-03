var express = require("express");
var burgerAction = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burgerAction.all(function (data) {
        var burgerhbs = {
            burger: data.burger_name
        };
        console.log(burgerhbs);
        res.render("index", burgerhbs);
    })
});

router.post("/api/burgers", function (req, res) {
    burgerAction.create(["name"], [req.body.name], function (result) {
        res.end();
    })

    router.update({ devoured: req.body.devoured }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;