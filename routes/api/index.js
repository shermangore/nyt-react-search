const router = require("express").Router();
const articleRoutes = require("./articles");
const savedRoutes = require("./articles");

// Book routes
router.use("/articles", articleRoutes);
router.use("/saved", savedRoutes);

module.exports = router;
