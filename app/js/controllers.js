'use strict';

/* Controllers */

var allControllers = angular.module('allControllers', ['allServices']);

allControllers.controller('ArtistListCtrl', ['$scope', '$routeParams', 'TopArtistsByYear',
  function($scope, $routeParams, TopArtistsByYear) {
    
    $scope.year = $routeParams.year;

    $scope.data = TopArtistsByYear.data;

    TopArtistsByYear.getData( $routeParams.year ).then( function( newData ) {
      $scope.data = newData;
    });

    $scope.orderProp = '-plays';
  }]);


allControllers.controller('ArtistDetailCtrl', ['$scope', '$routeParams', 'ArtistData', 
  function($scope, $routeParams, ArtistData) {
    
    $scope.data = ArtistData.data;
    $scope.total_time = ArtistData.total_time;
    $scope.total_time_unit = ArtistData.total_time_unit;

    ArtistData.getData( $routeParams.artist_name ).then( function( newData ) {
      
      // feel like I should be doing this somewhere else...
      $scope.data = newData;
      $scope.total_time = newData.total_hours;
      $scope.units = ArtistData.units;

      $scope.total_time_unit = ArtistData.units[0];
      $scope.$watch('total_time_unit', function()
      {
        $scope.total_time = ArtistData.convertPlaytime( 
          newData.total_hours, $scope.total_time_unit);
      } );




    });

  }]);


allControllers.controller('PlaylistCtrl', ['$scope', '$routeParams', 'TopArtistsByYear', 'PlaylistService',
  function($scope, $routeParams, TopArtistsByYear, PlaylistService) {

    // $scope.year = $routeParams.year;

    TopArtistsByYear.getData( $routeParams.year ).then( function( newData ) {
      $scope.playlist = PlaylistService.makePlaylist( newData );
    });
    
    $scope.removeRowAt = function(index) {
      $scope.playlist.splice(index, 1);
    }



  }]);
