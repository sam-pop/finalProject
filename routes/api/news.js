const router = require("express").Router();
const apiController = require("../../controllers/apiController");

// Matches with "/api/news/:location"
router.route("/:location")
  .get(apiController.getNews);

module.exports = router;