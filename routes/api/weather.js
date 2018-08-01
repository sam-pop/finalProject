const router = require("express").Router();
const apiController = require("../../controllers/apiController");

// Matches with "/api/weather/:lat/:lng"
router.route("/:lat/:lng")
  .get(apiController.getWeather);

module.exports = router;