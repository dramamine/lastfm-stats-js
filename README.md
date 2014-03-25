### HI HI

## WHAT THE HELL IS THIS?
lastfm-stats-js is a personal project of mine to analyze [my Last.fm data](http://www.last.fm/user/measuredincm/). (Last.fm is a site I've been using to track my mp3-listening habits for the past 10 years.) There are three main parts to this:

- Scripts to pull data from the [Last.fm API](http://www.last.fm/api) and put it into a sqlite database. This is stuff I wrote in Ruby last year and I haven't made it publicly available (yet).
- Node / Express stuff to serve up data from said database. Nothing too fancy here, just running sqlite queries and serving the results up via a RESTful interface. Check the src/ folder for the cool stuff.
Sample REST API interactions:
localhost:3000/get_top_artists/2013
localhost:3000/get_artist_data/Ulcerate

- Angular stuff to provide a UI for this data. Check the app/ directory for the cool stuff. Go here to see it:
localhost:3000/app/

## WHAT IS THIS BASTARD COMBINATION OF SQLITE / NODE / EXPRESS / ANGULARJS
Ahh, the SEAN stack! There are probably much better ways to do this (see the dozens of MEAN stack seeds and whatnot out there), but this works okay because the front-end and back-end are totally separate, as they should be. Express is simply serving up the AngularJS part as static files. A production-ready app would have way more stuff in the grunt file for minifying my Angular files, and would probably use bower or CDNs for serving up the Angular library files.

## THIS UI IS TERRIBLE.
Don't worry about it. Right now this is just something I used to learn Angular and craft my own tutorial. I learned how to write factories, services, directives, and controllers, and learned how to use data binding, filters, and asynchronous calls to a RESTful API.

# Run with grunt
First, do 'npm install' to get started. Then run 'grunt' and you're good to go.

# Then go to
localhost:3000

## Database Shizz
# Run this to play around
sqlite3 db/measuredincm.db

# something I did
ALTER TABLE track_history ADD COLUMN playtime datetime;
UPDATE track_history SET playtime = datetime(time_utc, 'unixepoch', 'localtime');

# Mocha
Use mocha test/*.coffee --compilers coffee:coffee-script/register

