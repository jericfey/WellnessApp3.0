const express = require("express");
const router = express.Router();
const User = require("../../models/user");

//Routes
router.get("/", (req, res) => {
  User.findAll({ })
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

router.post("/newuser", (req, res) => {
//   console.log("Body; ", req.body);
  const data = req.body;
  const newUser = new User(data);

  // .save
  newUser.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server error" });
      return;
    } 
      return res.json({
        msg: "Data received",
      });
    
  });
});

router.get("/users", (req, res) => {
  const data = {
    name: "Running",
    duration: 30,
  };
  res.json(data);
});

module.exports = router;
