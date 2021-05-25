const db = require("../database/db");

exports.insert = async (email, username, password, cb) => {
  const query = "INSERT INTO users (email,username,password) VALUES (?,?,?)";
  db.query(query, [email, username, password], (err, result, fields) => {
    cb(err);
  });
};

exports.findUser = (email, cb) => {
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], (err, result) => {
    cb(err, result ? result[0] : null);
  });
};
