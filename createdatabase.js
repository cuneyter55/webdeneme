import mysql from 'mysql2'


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "31102003",
  
});



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});