var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "m7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "cz8gedv43zbea3bd",
  password: "ij5y8wxuv6nyzqph",
  database: "fuu55n9vds3d1f3m"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
