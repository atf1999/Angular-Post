var postApp = angular.module("postApp",[])
postApp.controller('postController', function($scope){
  $scope.posts = [];
  $scope.addPost = function(){
     $scope.posts.push({name: $scope.content, vote: 0});
     $scope.content = "";
  };
  $scope.incrementVotes = function(post){
     post.vote += 1;
  };
});
