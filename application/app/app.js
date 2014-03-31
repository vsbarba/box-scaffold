var App = angular.module( 'boxScaffold', [
  'boxScaffold.dashboard',
  'ngRoute',
  'ui.router'
]);

App.config( function myAppConfig ( $locationProvider, $stateProvider, $urlRouterProvider ) {

	// /#/ to remove hashtag
  $locationProvider.html5Mode(true)

  // Default URL Redirect
  $urlRouterProvider.otherwise( '/404' );

  // Set your index routing 
  $stateProvider
    .state('index', {
      url: '/',
      controller: 'DashboardCtrl',
      templateUrl: '/app/dashboard/dashboard.html',
      data: {
        pageTitle: 'What is It?'
      }
    });
});

App.run( function run () {
});

App.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
});

