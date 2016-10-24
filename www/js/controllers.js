angular.module('starter.controllers', [])

.controller('NewsCtrl', function(News) {
  var vm = this;
  
  vm.articles = News.getNews()
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('PhotoCtrl', function(Photos) { 
  
  var vm = this;
  
  vm.photos = Photos.getPhotos();
  
});
