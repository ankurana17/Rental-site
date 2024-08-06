var mysql =require("mysql");
var connection = mysql.createPool({
    host:"localhost",
    user: "root",
    password: "",
    database: "buniv",
    multipleStatements: true
});
module.exports = connection;