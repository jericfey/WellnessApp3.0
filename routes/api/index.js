const router = require("express").Router();
const userRoutes = require("./user");
const workoutRoutes = require("./workout");
const weightRoutes = require("./weight");
const calorieRoutes = require("./calorie");

// User routes
router.use("/users", userRoutes);

// Workout routes
router.use("/workouts", workoutRoutes);

// Weight routes
router.use("/weight", weightRoutes);

// Calorie routes
router.use("/calorie", calorieRoutes);

module.exports = router;
