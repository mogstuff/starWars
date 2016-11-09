angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('starWarsFilms', {
    url: '/page1',
    templateUrl: 'templates/starWarsFilms.html',
    controller: 'starWarsFilmsCtrl'
  })

  .state('filmTitle', {
    url: '/page2',
    templateUrl: 'templates/filmTitle.html',
    controller: 'filmTitleCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});