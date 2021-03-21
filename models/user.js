const db = require("../database/db");

exports.insert = (id, text, cb) => {
  // console.log(id);
  const query = "INSERT INTO data (user_id,info,created_at) VALUES (?,?,?)";
  db.query(query, [id, text, new Date()], (err, result, fields) => {
    cb(err);
  });
};

exports.getData = (id, date, cb) => {
  const query = "SELECT info FROM data WHERE user_id=? AND created_at =?";
  db.query(query, [id, date], (err, result, fields) => {
    // console.log(result);
    cb(err, result);
  });
};
