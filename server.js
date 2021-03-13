const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//http request logger to the console to show routes being hit
app.use(morgan("tiny"));
// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wellnessapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//mongoose listener
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
