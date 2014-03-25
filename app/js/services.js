'use strict';

/* Services */

var allServices = angular.module('allServices', []);

allServices.service('SampleService', [
function() {
  this.data = [{
  "artist_name": "Metallica", "plays": 500
  }, 
  {
    "artist_name": "Altar of Plagues", "plays": 450
  }, 
  {
    "artist_name": "Death Cab for Cutie", "plays": 400
  }, 
  {
    "artist_name": "Owl City", "plays": 300
  }, 
  {
    "artist_name": "Fear Factory", "plays": 200
  }, 
  {
    "artist_name": "The Postal Service", "plays": 100
  }, 
  {
    "artist_name": "Band 5", "plays": 80
  }, 
  {
    "artist_name": "Band 6", "plays": 50
  }, 
  {
    "artist_name": "Band 7", "plays": 20
  }, 
  {
    "artist_name": "Band 8", "plays": 10
  }];
}]);

/**
 * Service: TopArtistsByYear
 *
 * this.data: contains a JSON object with results.
 *
 * this.getData(year): Returns top artist data for a given year.
 * @param {year} (Int) The year to grab data for.
 * 
 */
allServices.service('TopArtistsByYear', ['$http', 
  function($http) {

    this.data = [{
      "artist_name": "Placeholder", "plays": 0
      }];

    

    this.getData = function(year) {
      var url = 'http://localhost:3000/top_artists/' + year;

      var promise = $http.get(url)
      .then(function(results) {
        console.log('got data back from express');
        console.log(results.data);
        return results.data;
      });
      return promise;
    };


  }]);

/**
 * Service: ArtistData
 *
 * Service for pulling information about a given artist the user has listened
 * to.
 *
 * this.data: the JSON object with the requested data.
 *
 * this.getData(artist_name): Returns artist summary data.
 * @param {artist_name} (String) The artist name to check.
 */
allServices.service('ArtistData', ['$http', '$routeParams', '$filter',
  function($http, $routeParams, $filter) {

    this.total_time = 0;
    this.total_time_unit = '';

    this.data = {
      "artist_name": "Marten & The Placeholders", 
      "total_plays": 0,
      "total_hours": 0,

      "by_month": [
        {
          "month": "2006-10",
          "plays": 0
        },
        {
          "month": "2008-09",
          "plays": 0
        },
        {
          "month": "2009-02",
          "plays": 0
        },
        {
          "month": "2009-06",
          "plays": 0
        },
        {
          "month": "2010-08",
          "plays": 0
        },
        {
          "month": "2011-11",
          "plays": 0
        }
      ]


      };

    

    this.getData = function(artist_name) {
      var url = 'http://localhost:3000/artist/' + artist_name;

      var promise = $http.get(url)
      .then(function(results) {
        //console.log('got data back from express');
        //console.log(results.data);
        
        // can transform data here
        console.log(results);

        // this.total_time = results.data[0].total_hours;
        // this.total_time_unit = 'hours';

        return results.data[0];
      });
      return promise;


      

      }

    this.units = [
      {"name": 'hours', "conversion": 1},
      {"name": 'days', "conversion": (1/24)},
      {"name": 'weeks', "conversion": (1/(24*7))},
      {"name": 'minutes', "conversion": 60},
      {"name": 'seconds', "conversion": (60*60)}
    ];

    /**
     * Converts time to some other unit.
     * 
     * @param hours {float} The number of hours.
     * @param unit {Object} The unit to convert to (as defined in this.units)
     * @return {float} The converted amount.
     */
    this.convertPlaytime = function(hours, unit) {

      var converted = unit.conversion * hours;

      return converted;

      }



    }



  ]);

allServices.service('PlaylistService', [
  function() {

    /**
     * Makes a JSON playlist object.
     *
     * @param data {JSON} Array of objects with artist names. 
     */
    this.makePlaylist = function(data) {


      var playlist = [];
      var songAdjectives = [
        'Bleak',
        'Amazing',
        'Beautiful',
        'Gothic',
        'Church of',
        'Grim',
        'Frostbitten',
      ];

      var songNouns = [
        'Rainforest',
        'Inverted Cross',
        'Sadness',
        'Party',
        'Madness',
        'Ritual',
        'Oblivion',
      ];

      angular.forEach( data, function(object) {
        playlist.push( 
          {
            "artist": object.artist_name,
            "title": songAdjectives[Math.floor(Math.random() * songAdjectives.length)]
              + " " + songNouns[Math.floor(Math.random() * songNouns.length)]
          }
        );
      });

      return playlist;

      }
    

  }]);














