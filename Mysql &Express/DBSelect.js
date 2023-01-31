var mysql=require("mysql");
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"mydb"
});

con.connect(function(err){
if(err) throw err;
console.log("Connected");
var add="Vellore"
//var sql="Select * from customers WHERE address= "+ mysql.escape(add);
var sql="Select * from customers WHERE address= ?";
//var sql="INSERT INTO customers(name,address)VALUES ('Poorvika','Ekka')";
//var sql="Select * from customers";
con.query(sql,[add],function(err,result,fields){
if (err) throw err;
console.log(result);
});
});