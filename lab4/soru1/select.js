import mysql from 'mysql2'


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "31102003",
  database: "mydb"

});


con.connect(function(err) {
    if (err) throw err;

    con.query("SELECT * FROM employee WHERE Departmentname = 'Engineering'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });