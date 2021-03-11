const express = require("express");
// const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 5000;

//http request logger to the console to show routes being hit
app.use(morgan("tiny"));

app.get("/api/newuser", (req, res) => {
  const data = {
    firstname: "Jeri",
    lastname: "Fey",
    email: "jeri@jerifey.com",
  };
  res.json(data);
});

app.listen(PORT, console.log(`Server is starting at: ${PORT}`));
