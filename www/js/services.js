angular.module('starter.services', [])

  .factory('Chats', function( $http ) {
    
    var chats = [];
    var cachedChats = [];

    function all() {
      return $http({
                  method: 'GET',
                  url: 'https://facebook-for-cats-api.herokuapp.com/chats'
                }).then(function successCallback(response) {
                 chats = response.data;
                  return chats;
                }, function errorCallback(response) {
                  console.log( 'ERROR: News' );
                });
    }

    function get( id ) {
        return $http({
                  method: 'GET',
                  cache: true,
                  url: 'https://facebook-for-cats-api.herokuapp.com/chats/' + id
                }).then(function successCallback(response) {
                  cachedChats.push( response.data );
                  return response.data;
                }, function errorCallback(response) {
                  console.log( 'ERROR: News' );
                });
      
    }

    function remove( chat ) {
      chats.splice( chats.indexOf( chat ), 1 );
    }

    function post( text ) {
      var req = {
        headers: {
          'Content-Type': 'application/json',
          'catbook-apikey': 'catbook123secretapikey'
        }
      }
       var data = {reply: text };

       return $http.post('https://facebook-for-cats-api.herokuapp.com/echoThePost', data, req ).then(function( res ) {
          console.log( res.data );
          return res;
        }, 
        function( err ) {
          return err.data;
        });
    }

    return {
      getAll: all,
      removeChat: remove,
      getChat: get,
      postChat: post
    };
  })

  .factory('News', function( $http ) {

    function get() {
      var articles = [];
      return $http({
                method: 'GET',
                url: 'https://facebook-for-cats-api.herokuapp.com/news'
              }).then(function successCallback(response) {
                return response.data;
              }, function errorCallback(response) {
                console.log( 'ERROR: News' );
              });

    }

    return {
      getNews: get
    }
  })

  // Photos Service
  .factory('Photos', function() {
    var KITTEN_PHOTOS = 40;
    var MIN_WIDTH = 50;
    var MAX_WIDTH = 100;
    var MIN_HEIGHT = 50;
    var MAX_HEIGHT = 120;

    function get() {
      var width, height;
      var photos = [];
      var widthRange = MAX_WIDTH - MIN_WIDTH;
      var heightRange = MAX_HEIGHT - MIN_HEIGHT;

      // create a bunch of random urls to placekitten.com
      for (var i = 0; i < KITTEN_PHOTOS; i++) {
        width = MIN_WIDTH + Math.round(Math.random() * widthRange);
        height = MIN_HEIGHT + Math.round(Math.random() * heightRange);

        photos.push({
          url : 'https://placekitten.com/' + width + '/' + height
        })
      }

      return photos;
    }

    return {
      getPhotos: get
    }
  });
