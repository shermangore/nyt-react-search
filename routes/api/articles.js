const router = require("express").Router();
const articleRoutes = require("../../controllers/articleRoutes");

// // Matches with "/api/books"
// router.route("/")
//   .get(articleRoutes.findAll)
//   .post(articleRoutes.create);

// Matches with "/api/saved"
router
  .route("/saved")
  .get(articleRoutes.findAllSaved)
  .put(articleRoutes.add)
  .delete(articleRoutes.remove);

// Wildcard - Matches with all other "get" routes
router
  .route("*")
  .get(articleRoutes.findAll);
  
module.exports = router;