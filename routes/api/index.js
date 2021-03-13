const router = require("express").Router();
const userRoutes = require("./user");
const workoutRoutes = require("./workout");

// User routes
router.use("/users", userRoutes);

// Workout routes
router.use("/workouts", workoutRoutes);

module.exports = router;
