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
    var sql = "INSERT INTO employee (EmployeeId, FirstName, LastName, DepartmentName) VALUES ?";
    var values =[
        ['1','Ken', 'Sanchez','Executive'],
        ['2','Terri', 'Duffy','Engineering'],
        ['3','Roberto', 'Tamburello','Engineering'],
        ['4','Rob', 'Walters','Engineering'], 
        ['5','Gail', 'Erickson','Engineering'],
        ['6','Jossef', 'Goldberg','Engineering'],
        ['7','Dylan', 'Miller','Support'],
        ['8','Diane', 'Margheim','Support'],
        ['9','Gigi', 'Matthew','Support'],
        ['10','Mcihale', 'Raheem','Support']



    ];    
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Eklenen kayıt sayısı: " + result.affectedRows);
    });
  });