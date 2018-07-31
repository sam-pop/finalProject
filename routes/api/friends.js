const router = require("express").Router();
const friendsController = require("../../controllers/friendsController");

// Matches with "/api/friends"
router.route("/")
    .get(friendsController.findAll)
    .post(friendsController.create);

// Matches with "/api/friends/:id"
router.route("/:id")
    .get(friendsController.findById)
    .put(friendsController.update)
    .delete(booksController.remove);

module.exports = router;
