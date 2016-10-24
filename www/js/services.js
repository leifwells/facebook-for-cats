angular.module('starter.services', [])

  // MockChats Service
  .factory('Chats', function() {
    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Oscar',
      previewText: 'You on your way?',
      body: 'You on your way? I\'ve got the string, catnip and am ready to party.',
      face: 'https://placekitten.com/40/40'
    }, {
      id: 1,
      name: 'Max',
      previewText: 'Hey, it\'s me',
      body: 'Hey, it\'s me, I was wondering if you were interested in getting stuck behind a heavy piece of furniture with me tonight. Let me know.',
      face: 'https://placekitten.com/41/41'
    }, {
      id: 2,
      name: 'Sam',
      previewText: 'I should buy a boat',
      body: 'I should buy a boat. Would love tips or ideas for litterbox at sea.',
      face: 'https://placekitten.com/42/42'
    }, {
      id: 3,
      name: 'Misty',
      previewText: 'Check meow\'t!',
      body: 'Check meow\'t!',
      face: 'https://placekitten.com/42/41'
    }, {
      id: 4,
      name: 'Coco',
      previewText: 'This is wicked good ice cream.',
      body: 'This is wicked good ice cream. Come by before the humans remember they left it out.',
      face: 'https://placekitten.com/40/41'
    }];

    return {
      all: function() {
        return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  })

  // MockNews Service
  .factory('News', function() {

    function getNews() {
      var articles = [
        {
          author: 'Smokey',
          authorImg: 'https://placekitten.com/40/40',
          imgSrc: 'https://placekitten.com/200/150',
          articleId: 1,
          body: 'You gotta be kitten me.',
          date: '2016-06-12',
          likes: 3,
          comments: 12
        },
        {
          author: 'Lucy',
          authorImg: 'https://placekitten.com/41/41',
          imgSrc: 'https://placekitten.com/200/151',
          articleId: 2,
          body: 'Turn up the mew-sic.',
          date: '2016-07-21',
          likes: 1,
          comments: 0 
        },
        {
          author: 'Oliver',
          authorImg: 'https://placekitten.com/42/42',
          imgSrc: 'https://placekitten.com/200/152',
          articleId: 3,
          body: 'Its a catastrophe',
          date: '2016-05-10',
          likes: 8,
          comments: 1
        },
        {
          author: 'Oreo',
          authorImg: 'https://placekitten.com/43/43',
          imgSrc: 'https://placekitten.com/200/153',
          articleId: 4,
          body: 'Happy purr-th day.',
          date: '2016-02-22',
          likes: 28,
          comments: 21 
        }
      ];

      return articles;

    }

    return {
      getNews: getNews
    }
  })

  // Photos Service
  .factory('Photos', function() {
    var KITTEN_PHOTOS = 40;
    var MIN_WIDTH = 50;
    var MAX_WIDTH = 100;
    var MIN_HEIGHT = 50;
    var MAX_HEIGHT = 120;

    function getPhotos() {
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
      getPhotos: getPhotos
    }
  });
