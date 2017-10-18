'use strict';

/* global angular */
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
    $http.post('/contacts', $scope.contact).then(() => {
      refresh();
    });
  };

  $scope.remove = (id) => {
    $http.delete(`/contacts/${id}`).then(() => {
      refresh();
    });
  };

  $scope.edit = (id) => {
    $http.get(`/contacts/${id}`).then((response) => {
      $scope.contact = response.data;
    });
  };

  $scope.update = () => {
    $http.put(`/contacts/${$scope.contact._id}`, $scope.contact).then((response) => {
      refresh();
    });
  };
});
