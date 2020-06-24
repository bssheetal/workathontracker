var path = require('path');
var router = require('express').Router();

// "/notes" responds with the notes.html file
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
// All other routes respond with the index.html file
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  module.exports = router;
