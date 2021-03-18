const router = require("express").Router();
const calorieController = require("../../controllers/calorieController");

// Matches with "/api/calorie"
router.route("/").get(calorieController.findAll).post(calorieController.create);

// Matches with "/api/calorie/:id"
router
  .route("/:id")
  .get(calorieController.findById)
  .put(calorieController.update)
  .delete(calorieController.remove);

module.exports = router;
