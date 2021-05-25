const userModel = require("../models/user");

exports.getTodaysNote = (req, res) => {
  res.render("note");
};

exports.postTodaysNote = (req, res) => {
  if (req.body.note !== "")
    userModel.insert(req.session.userId, req.body.note, (err) => {
      if (err) console.log(err);
    });
  res.redirect("/");
};

exports.getOldNotes = (req, res) => {
  res.render("old");
};

exports.getOldData = (req, res) => {
  const date = req.query.date;
  // console.log(date);
  userModel.getData(req.session.userId, date, (err, result) => {
    // console.log(result);
    res.json(result);
  });
};
