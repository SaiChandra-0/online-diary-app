const db = require("../database/db");

exports.insert = (id, text, cb) => {
  // console.log(id);
  const query = "INSERT INTO data (user_id,note) VALUES (?,?)";
  db.query(query, [id, text], (err, result, fields) => {
    cb(err);
  });
};

exports.getData = (id, date, cb) => {
  const query = "SELECT note FROM data WHERE user_id=? AND DATE(created_at) =?";
  db.query(query, [id, date], (err, result, fields) => {
    // console.log(result);
    cb(err, result);
  });
};
