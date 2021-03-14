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
    db.User.findOne({ email: req.body.email })
      .then((dbUser) => {
        bcrypt
          .compare(dbUser.paswword, req.body.password)
          .then((ok) => {
            const user = dbUser.toJSON();
            delete user.password;
            res.cookie("user", user, {
              //replace localhost with heroku app url for production
              domain: "localhost",
              httpOnly: true,
              path: "/",
            });
            res.json({ ok });
          })
          .catch((err) => {
            res.json({ ok: false });
          });
      })
      .catch((err) => {
        res.json({ ok: false });
      });
  },
  create: function (req, res) {
    console.log(req.body);
    bcrypt.genSalt(12).then((salt) => {
      bcrypt.hash(req.body.password, salt).then((hashpw) => {
        db.User.create({ ...req.body, password: hashpw }).then((dbUser) => {
          res.json({ ok: true });
        });
      });
    });
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
