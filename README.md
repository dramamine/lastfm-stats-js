# HI HI

# Run with grunt
cd ~/Dropbox/lastfm-stats-js
grunt

# Then go to
localhost:3000

## Database Shizz
# Run this to play around
sqlite3 db/measuredincm.db

ALTER TABLE track_history ADD COLUMN playtime datetime;
UPDATE track_history SET playtime = datetime(time_utc, 'unixepoch', 'localtime');