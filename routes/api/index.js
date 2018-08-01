const router = require("express").Router();
const userRoutes = require("./users");
const friendRoutes = require("./friends");
const weatherRoutes = require("./weather");
const newsRoutes = require("./news"); 

// User routes
router.use("/users", userRoutes);
router.use("/friends", friendRoutes);
router.use("/weather", weatherRoutes);
router.use("/news", newsRoutes);

module.exports = router;