express = require 'express'
require 'coffee-script'
require 'jade'
stats = require './stats'
path = require 'path'

app = express()

#app.configure ->
  #app.use '/public', express.static (__dirname + '/public')
 

# app.use express.static (__dirname + '/public')
# app.use express.static (__dirname + '/views/public')
# app.use express.static '/public', (__dirname + '/views/public')
app.use express.static path.join __dirname, '../public'


app.set 'view engine', 'jade'

app.locals.pretty = true

app.get '/', (req, res) ->
  
  # doesn't work properly yet
  # var results = stats.lookup();
  stats.lookup (results) -> 
    console.log 'Callback from stats.lookup called.'
    app.locals.results = results



    res.render 'index',
      # the 'locals' object is here; these get sent to the template
      layout: false
      title: 'Marten\'s Page'
      results: results

    # res.render 'index',
    #   layout: false,
    #     # hoping this is where 'locals' happens
    #     title: 'Marten\'s Page'
    #     results: results
    
app.get '/top_artists/:year', (req, res) ->
  
  # use this for testing
  stats.get_sample_data (data) ->
    res.json data






app.listen 3000
console.log 'Listening on port 3000'


