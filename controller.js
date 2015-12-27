var postApp = angular.module("postApp",[])
postApp.controller('postController', function($scope){
  $scope.posts = [];
  $scope.addPost = function(){
     $scope.posts.push({name: $scope.content, vote: 0, comments: []});
     $scope.content = ""; 
  };
  $scope.incrementVotes = function(post){
     post.vote += 1;
  };
  $scope.addComment = function(post){
     console.log(post.name)
     post.comments.push(
     {
      text: post.commentors
     });
     post.commentors= "";
  };
});
