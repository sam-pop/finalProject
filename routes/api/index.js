const router = require("express").Router();
// const userRoutes = require("./users");
const friendRoutes = require("./friends");

// User routes
// router.use("/users", userRoutes);
router.use("/friends", friendRoutes);

module.exports = router;