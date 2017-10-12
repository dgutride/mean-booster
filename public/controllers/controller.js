'use strict';

const meanBooster = angular.module('meanBooster', []);
meanBooster.controller('AppCtrl', ($scope, $http) => {

  function refresh () {
    $http.get('/contacts').then((response) => {
      $scope.contacts = response.data;
      $scope.contact = null;
    });
  }

  refresh();

  $scope.add = () => {
    $http.post('/contacts', $scope.contact).then((response) => {
      refresh();
    });
  };
});
