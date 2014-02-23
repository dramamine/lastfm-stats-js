var file_location = './measuredincm.db';

var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(file_location);

var lookup = function(){

  fs.exists(file_location, function(exists) {
    if( exists ) console.log('this file exists.');
  });

  var stmt = 'SELECT count(*) FROM track_history';
  var results = db.all(stmt, function(err, rows) {
    console.log(rows);
  });

};
exports.lookup = lookup;


/*
db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");

  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

db.close();
*/
