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
        ['21','Temi', 'Sanchez','Executive'],
        ['3','Ken', 'Sanchez','Executive'],
        ['4','Ken', 'Sanchez','Executive'], 
        ['5','Ken', 'Sanchez','Executive'],
        ['6','Ken', 'Sanchez','Executive'],
        ['7','Ken', 'Sanchez','Executive'],
        ['8','Ken', 'Sanchez','Executive'],
        ['9','Ken', 'Sanchez','Executive'],
        ['10','Ken', 'Sanchez','Executive']



    ];    
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });