const router = require("express").Router();
const apiController = require("../../controllers/apiController");

// Matches with "/api/weather/:location"
router.route("/:location")
  .get(apiController.getWeather);

module.exports = router;