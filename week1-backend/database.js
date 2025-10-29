const mysql = require("mysql2/promise");

const database = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1457",
  database: "mymahir",
});

(async () => {
  try {
    const connection = await database.getConnection();
    console.log("Connected to MySQL Database!");
    connection.release();
  } catch (err) {
    console.log("Database connection failed:", err.message);
  }
})();
module.exports = database;
