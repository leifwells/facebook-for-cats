angular.module('starter.controllers', [])

.controller('NewsCtrl', function(News) {
  var vm = this;
  
  News.getNews().then(function(news){
    vm.articles = news;
  })
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = [];
  $scope.unreadCount = 0;
  Chats.getAll().then( function( chats ) {
    for(var i = 0; i < chats.length; i++ ) {
      if( chats[i].unread ) {
        $scope.unreadCount++;
      }
    }
    $scope.chats = chats;
  });

  $scope.remove = function(chat) {
    Chats.removeChat(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $ionicHistory, $window, Chats) {

  $scope.replyText = '';
  $scope.postError = false;

  Chats.getChat($stateParams.chatId).then( function( chat ){
    $scope.chat = chat;
  });

  $scope.postReply = function() {
    $scope.postError = false;
    Chats.postChat( $scope.replyText ).then( function( res ) {
      if( res.error === undefined ) {
        $ionicHistory.goBack(-1);
      } else {
        $scope.postError = true;
      }
    });
  }

})

.controller('PhotoCtrl', function(Photos) { 
  
  var vm = this;
  
  vm.photos = Photos.getPhotos();
  
});
