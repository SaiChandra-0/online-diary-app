const db = require("../database/db");

exports.insert = (username, password, cb) => {
  const query = "INSERT INTO users (username,password) VALUES (?,?)";
  db.query(query, [username, password], (err, result, fields) => {
    if (err) cb(err);
  });
};

exports.findUser = (username, cb) => {
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], (err, result) => {
    cb(err, result);
  });
};
