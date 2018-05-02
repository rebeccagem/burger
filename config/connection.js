var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSURL);
} else{
  connection = mysql.createConnection({
  host: "ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "k7x95b6vm8y52f6t",
  password: "wnucp5fp8g1cc02c",
  database: "	viaqibl8u9vfv3cs"
});
};



connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
