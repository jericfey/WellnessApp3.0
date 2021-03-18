const db = require("../models");
const bcrypt = require("bcryptjs");

// Defining methods for the usersController
module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log(req.body);
    db.User.findById(req.params.id)
      .then((dbUser) => {
        console.log(dbUser);
        res.json(dbUser);
      })
      .catch((err) => {
        console.log(err);
        res.json({ ok: false });
      });
  },
  create: function (req, res) {
    console.log(req.body);
    bcrypt.genSalt(12).then((salt) => {
      bcrypt.hash(req.body.password, salt).then((hashpw) => {
        db.User.create({ ...req.body, password: hashpw }).then((dbUser) => {
          res.json({ ok: true, id: dbUser._id });
        });
      });
    });
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ email: req.body.email }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  checkPassword: function (req, res) {
    db.User.findOne({ email: req.body.email }).then((dbUser) => {
      console.log("updating user", dbUser);
      bcrypt
        .compare(dbUser.password, req.body.password)
        .then((ok) => {
          const user = dbUser.toJSON();
          delete user.password;
          res.cookie("user", user, {
            //replace localhost with heroku app url for production
            domain: "localhost",
            httpOnly: true,
            path: "/",
          });
          res.json({ ok: true, id: user._id });
        })

        .catch((err) => {
          console.log(err);
          res.json({ ok: false });
        });
    });
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
