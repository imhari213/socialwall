var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'varaprasad',
  database : 'sys'
});
 
connection.connect();
 var querys='CREATE TABLE Persons ( PersonID int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255) )';
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();