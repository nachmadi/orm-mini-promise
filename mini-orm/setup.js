var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/database.db');
var check;
db.serialize(function() {

  db.run(" CREATE TABLE if not exists projects (id integer PRIMARY KEY AUTOINCREMENT, nama text NOT NULL, status text NOT NULL, id_spv integer)");
  db.run(" CREATE TABLE if not exists supervisors (id integer PRIMARY KEY AUTOINCREMENT, nama text NOT NULL, email text NOT NULL)");

  // db.each("SELECT rowid AS id, info FROM user_info", function(err, row) {
  //     console.log(row.id + ": " + row.info);
  // });
});
