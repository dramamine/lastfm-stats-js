express = require 'express'
require 'coffee-script'
require 'jade'
stats = require './stats'
app = express()

app.set 'view engine', 'jade'

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
    



app.listen 3000
console.log 'Listening on port 3000'


