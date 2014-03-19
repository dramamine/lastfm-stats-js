file_location = './db/measuredincm.db'

fs = require('fs')
sqlite3 = require('sqlite3').verbose()
db = new sqlite3.Database(file_location)



lookup = (callback) ->
  fs.exists file_location, (exists) -> 
    console.log 'this file exists.' if exists
  

  stmt = 'SELECT * FROM track_history LIMIT 5'

  # help! I think this is just returning 'results'
  # which is a db object
  # and really, what I want to do is get 'rows' into my webpage
  results = db.all stmt, (err, rows) ->
    # console.log rows
    callback rows



exports.lookup = lookup

get_top_artists = (year, callback) ->
  stmt = "
    SELECT artist_name, count(*) as plays
    FROM track_history
    WHERE substr(playtime, 1, 4) = '#{year}'
    GROUP BY artist_name
    ORDER BY count(*) DESC
    LIMIT 10
    "

  results = db.all stmt, (err, rows) ->
  # console.log rows
    callback rows

exports.get_top_artists = get_top_artists


###
Returns some sample data to the callback.
###
get_sample_data = (callback) ->
  sample_data = [{
      "artist": "Metallica", "plays": "500"
    }, 
    {
      "artist": "Altar of Plagues", "plays": "450"
    }, 
    {
      "artist": "Band 1", "plays": "400"
    }, 
    {
      "artist": "Band 2", "plays": "300"
    }, 
    {
      "artist": "Band 3", "plays": "200"
    }, 
    {
      "artist": "Band 4", "plays": "100"
    }, 
    {
      "artist": "Band 5", "plays": "80"
    }, 
    {
      "artist": "Band 6", "plays": "50"
    }, 
    {
      "artist": "Band 7", "plays": "20"
    }, 
    {
      "artist": "Band 8", "plays": "10"
    }]

  callback sample_data

exports.get_sample_data = get_sample_data









