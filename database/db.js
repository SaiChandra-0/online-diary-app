const mysql = require("mysql2");

module.exports = mysql.createPool({
  host: "db4free.net",
  user: "saichandra",
  database: "diarydata",
  password: "7bf23080",
});
