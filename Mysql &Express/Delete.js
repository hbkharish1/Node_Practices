var mysql=require("mysql");
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"mydb"
});
con.connect(function(err){
if (err) throw err;
console.log("Connected");
sql="select * from customers limit 1"
//var sql ="update customers set address='chennai' where address='Ekka'";
con.query(sql,function(err,result){
if (err) throw err;
console.log(result)
});
});
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });