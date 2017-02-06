// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('weddingapp',
  [
    'ionic',
    'weddingapp.appController',
    'weddingapp.homeController',
    'weddingapp.friendsAndFamilyController',
    'weddingapp.lovePuzzleController',
    'weddingapp.loveStoryController',
    'weddingapp.rsvpController',
    'weddingapp.galleryController',
    'weddingapp.weddingDetailsController',
    'weddingapp.dinnerController',
    'weddingapp.aptSearchController',
    'jkuri.gallery',
    'slidingPuzzle',
    'timer',
    'ui.tree',
    'ngCordova',
    'firebase'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.gallery', {
    url: '/gallery',
    views: {
      'menuContent': {
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryCtrl'
      }
    }
  })

  .state('app.loveStory', {
    url: '/ourLoveStory',
    views: {
      'menuContent': {
        templateUrl: 'templates/ourLoveStory.html',
        controller: 'OurLoveStoryCtrl'
      }
    }
  })
  .state('app.loveStoryPuzzle', {
    url: '/ourLoveStoryPuzzle',
    views: {
      'menuContent': {
        templateUrl: 'templates/ourLoveStoryPuzzle.html',
        controller: 'OurLoveStoryPuzzleCtrl'
      }
    }
  })
  .state('app.weddingDetails', {
    url: '/weddingDetails',
    views: {
      'menuContent': {
        templateUrl: 'templates/weddingDetails.html',
        controller: 'WeddingDetailsCtrl'
      }
    }
  })
  .state('app.friendsAndFamily', {
    url: '/friendsAndFamily',
    views: {
      'menuContent': {
        templateUrl: 'templates/friendsAndFamily.html',
        controller: 'FriendsAndFamilyCtrl'
      }
    }
  })
  .state('app.rsvp', {
    url: '/rsvp',
    views: {
      'menuContent': {
        templateUrl: 'templates/rsvp.html',
        controller: 'RsvpCtrl'
      }
    }
  })
  .state('app.dinner', {
    url: '/dinner',
    views: {
      'menuContent': {
        templateUrl: 'templates/dinner.html',
        controller: 'DinnerCtrl'
      }
    }
  })
  .state('app.aptSearch', {
    url: '/aptSearch',
    views: {
      'menuContent': {
        templateUrl: 'templates/aptSearch.html',
        controller: 'AptSearchCtrl'
      }
    }
  })
  .state('app.twilio', {
    url: '/twilio',
    views: {
      'menuContent': {
        templateUrl: 'templates/twilio.html',
        controller: 'TwilioCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/aptSearch');
});
