import mysql from 'mysql2'


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "31102003",
  database: "mydb"

});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE employee (EmployeeId VARCHAR(255), FirstName VARCHAR(255), LastName VARCHAR(255),DepartmentName VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });