const bcrypt = require("bcrypt");
const authModel = require("../models/auth");
exports.getLogin = (req, res) => {
  res.render("login");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.postLogin = (req, res) => {
  authModel.findUser(req.body.username, (err, result) => {
    if (err) {
      return res.send("<h1>error</h1>");
    }
    if (result.length === 0) {
      return res.redirect("/auth/signup");
    }
    bcrypt.compare(req.body.password, result[0].password, (err, doMatch) => {
      if (!doMatch) {
        return res.redirect("/auth/login");
      }
      req.session.isLoggedIn = true;
      req.session.username = req.body.username;
      req.session.userId = result[0].id;
      res.redirect("/");
    });
  });
};

exports.postSignup = (req, res) => {
  bcrypt.hash(req.body.password, 12, (err, hashedPassword) => {
    authModel.insert(req.body.username, hashedPassword, (err) => {
      if (err) return res.send("<h1>error</h1>");
    });
  });
  res.redirect("/auth/login");
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
