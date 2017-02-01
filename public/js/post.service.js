(function() {
  'use strict';
  angular.module('app')
  .service('postService', function($http, $state) {
    this.allPosts = [];
    this.submitPost = function(post) {
      console.log("getting inside service");
       $http.post('/classifieds', post).then(function(response) {
        console.log("getting inside post request", response.data);
        this.allPosts = response.data;
        console.log(response.data);
        // $http.get('/classifieds').then(function(response) {
        //   console.log("array of classifieds", response.data);
        //   this.allPosts = response.data;
        // });
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
