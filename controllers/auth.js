const bcrypt = require("bcrypt");
const authModel = require("../models/auth");
exports.getLogin = (req, res) => {
  res.render("login", { error: false });
};

exports.getSignup = (req, res) => {
  res.render("signup", { error: false });
};

exports.postLogin = (req, res) => {
  authModel.findUser(req.body.email, (err, result) => {
    if (err) {
      return res.send("<h1>error</h1>");
    }
    if (result === undefined || result === null) {
      return res.render("login", { error: true });
    }
    bcrypt.compare(req.body.password, result.password, (err, doMatch) => {
      if (!doMatch) {
        return res.render("login", { error: true });
      }
      req.session.isLoggedIn = true;
      req.session.username = result.username;
      req.session.userId = result.id;
      res.redirect("/");
    });
  });
};

exports.postSignup = async (req, res) => {
  // console.log(req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, 12);
  authModel.insert(req.body.email, req.body.username, hashedPassword, (err) => {
    if (err) return res.render("signup", { error: true });
    else res.redirect("/auth/login");
  });
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
