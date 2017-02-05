(function() {
  'use strict';
  angular.module('app')
  .service('postService', function($http, $state) {
    this.submitPost = function(post) {
      console.log("getting inside service", post);
       $http.post('/classifieds', post).then(function(response) {
        console.log("posted:", response.data);
        $http.get('/classifieds').then(function(response) {
          console.log("array of classifieds", response.data);
        });
      });
      // $state.go('home');
      // TODO:need home page to refresh with new data immediately
    };
    this.editPost = function(post) {
      console.log(post.id);
      // var editId = req.params.id;
      // console.log(editId);
      $http.patch(`/classifieds/${post.id}`, post).then(function(response) {
        console.log("edited: ", response.data);
      });
    };
  });

}()); //end of IIFE
