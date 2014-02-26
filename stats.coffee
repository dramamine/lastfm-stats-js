fs = require('fs')
sqlite3 = require('sqlite3').verbose()
db = new sqlite3.Database(file_location)

file_location = './measuredincm.db'


lookup = -> 
  fs.exists file_location, (exists) -> 
    console.log 'this file exists.' if exists
  

  stmt = 'SELECT * FROM track_history LIMIT 5'

  # help! I think this is just returning 'results'
  # which is a db object
  # and really, what I want to do is get 'rows' into my webpage
  results = db.all stmt, (err, rows) ->
    console.log rows
    return rows



exports.lookup = lookup
