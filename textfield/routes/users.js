var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/detail", (req, res) => {
  console.log("hello world");
  res.render("detail");
});

router.post("/detail", (req, res) => {
  const { data } = req.body;
  res.render("datatoshow", { data });
});

module.exports = router;
