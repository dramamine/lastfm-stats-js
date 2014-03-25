'use strict';

/* App Module */

var lastfmApp = angular.module('lastfmApp', [
  'ngRoute',
  'allControllers',
  'allDirectives'
]);

lastfmApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/top_artists/:year', {
        templateUrl: 'partials/top-artists.html',
        controller: 'ArtistListCtrl'
      }).
      when('/artist/:artist_name', {
        templateUrl: 'partials/artist-detail.html',
        controller: 'ArtistDetailCtrl'
      }).
      when('/playlist/:year', {
        templateUrl: 'partials/playlist.html',
        controller: 'PlaylistCtrl'
      }).
      otherwise({
        redirectTo: '/top_artists/2013'
      });
  }]);
