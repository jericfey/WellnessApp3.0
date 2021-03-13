import axios from "axios";

export default {
  //Get all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  //Get all workouts
  getWorkouts: function () {
    return axios.get("/api/workouts");
  },
  // Gets the workout with the given id
  getWorkout: function (id) {
    return axios.get("/api/workouts/" + id);
  },
  // Deletes the workout with the given id
  deleteWorkout: function (id) {
    return axios.delete("/api/workouts/" + id);
  },
  // Saves a workout to the database
  saveWorkout: function (workoutData) {
    return axios.post("/api/workouts", workoutData);
  },
};
