import mysql from 'mysql2'


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "31102003",
  database: "mydb"

});


con.connect(function(err) {
    if (err) throw err;

    con.query("UPDATE employee SET Departmentname = 'Executive' WHERE FirstName = 'Terri'", function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + "kayıt güncellendi");
    });
  });