(function() {
'use strict';

angular.module('app').config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);


  $stateProvider
    .state({
      name: 'home',
      url: '/',
      component: 'classifieds'
    })
    .state({
      name: 'post',
      url: '/post',
      component: 'post'
    })
    .state({
      name: 'edit',
      url: '/edit/:editId',
      component: 'edit'
    });
}
}());//end of IIFE

//plug in to /edit: the name of variable youre storing the url id in
