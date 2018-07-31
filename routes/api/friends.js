const router = require("express").Router();
const friendController = require("../../controllers/friendController");

// Matches with "/api/friends"
router
  .route("/")
  .get(friendController.findAll)
  .post(friendController.create);

// Matches with "/api/friends/:id"
router
  .route("/:id")
  .get(friendController.findById)
  .put(friendController.update)
  .delete(friendController.remove);

module.exports = router;
