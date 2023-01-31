var sql=require("mysql");
var con=sql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"mydb"
});
con.connect(function(err){
if (err) throw err;
console.log("Connected");
//con.query("CREATE DATABASE mydb",function(err,result){
//if (err) throw err;
//console.log("Database Created");
//var sql="CREATE TABLE customers(name VARCHAR(255),address VARCHAR(255))";
var sql="INSERT INTO customers(name,address)VALUES('harish ','Vellore')";
con.query(sql,function(err,result){
if (err) throw err;
console.log("1 row Created");
});
});