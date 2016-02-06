angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.browseMeals', {
      url: '/browse',
      views: {
        'tab2': {
          templateUrl: 'templates/browseMeals.html',
          controller: 'browseMealsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('mostPopular', {
      url: '/popular',
      templateUrl: 'templates/mostPopular.html',
      controller: 'mostPopularCtrl'
    })
        
      
    
      
        
    .state('spaghettiBolognese', {
      url: '/recipe/1',
      templateUrl: 'templates/spaghettiBolognese.html',
      controller: 'spaghettiBologneseCtrl'
    })
        
      
    
      
        
    .state('addMealToPlanner', {
      url: '/page4',
      templateUrl: 'templates/addMealToPlanner.html',
      controller: 'addMealToPlannerCtrl'
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('tabsController.shoppingList', {
      url: '/page5',
      views: {
        'tab3': {
          templateUrl: 'templates/shoppingList.html',
          controller: 'shoppingListCtrl'
        }
      }
    })
        
      
    
      
        
    .state('cameraTabDefaultPage', {
      url: '/page7',
      templateUrl: 'templates/cameraTabDefaultPage.html',
      controller: 'cameraTabDefaultPageCtrl'
    })
        
      
    
      
        
    .state('cartTabDefaultPage', {
      url: '/page8',
      templateUrl: 'templates/cartTabDefaultPage.html',
      controller: 'cartTabDefaultPageCtrl'
    })
        
      
    
      
        
    .state('cloudTabDefaultPage', {
      url: '/page9',
      templateUrl: 'templates/cloudTabDefaultPage.html',
      controller: 'cloudTabDefaultPageCtrl'
    })
        
      
    
      
    .state('tabsController', {
      url: '/page6',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('page', {
      url: '/page13',
      templateUrl: 'templates/page.html',
      controller: 'pageCtrl'
    })
        
      
    
      
        
    .state('tabsController.mealPlanner', {
      url: '/page20',
      views: {
        'tab1': {
          templateUrl: 'templates/mealPlanner.html',
          controller: 'mealPlannerCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page6/browse');

});