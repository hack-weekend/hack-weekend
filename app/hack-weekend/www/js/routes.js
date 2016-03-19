angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
    //
    // var appID = 1255143337845835;
    // var version = "v2.0"; // or leave blank and default is v2.0
    // $cordovaFacebookProvider.browserInit(appID, version);

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })

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
        controller: 'mostPopularCtrl',
        resolve:{
            category: function(){
                return "popular";
            }
        }
    })
    
    .state('recent', {
        url: '/recent',
        templateUrl: 'templates/mostPopular.html',
        controller: 'mostPopularCtrl',
        resolve:{
            category: function(){
                return "recent";
            }
        }
    })
    
    .state('quickAndEasy', {
        url: '/quickAndEasy',
        templateUrl: 'templates/mostPopular.html',
        controller: 'mostPopularCtrl',
        resolve:{
            category: function(){
                return "quickAndEasy";
            }
        }
    })
    
    .state('cuisines', {
        url: '/cuisines',
        templateUrl: 'templates/mostPopular.html',
        controller: 'mostPopularCtrl',
        resolve:{
            category: function(){
                return "cuisines";
            }
        }
    })
    
    .state('diet', {
        url: '/diet',
        templateUrl: 'templates/mostPopular.html',
        controller: 'mostPopularCtrl',
        resolve:{
            category: function(){
                return "diet";
            }
        }
    })
    
   .state('childFriendly', {
        url: '/childFriendly',
        templateUrl: 'templates/mostPopular.html',
        controller: 'mostPopularCtrl',
        resolve:{
            category: function(){
                return "childFriendly";
            }
        }
    })
    
    .state('seasonal', {
        url: '/seasonal',
        templateUrl: 'templates/mostPopular.html',
        controller: 'mostPopularCtrl',
        resolve:{
            category: function(){
                return "seasonal";
            }
        }
    })
    
    .state('courses', {
        url: '/courses',
        templateUrl: 'templates/mostPopular.html',
        controller: 'mostPopularCtrl',
        resolve:{
            category: function(){
                return "courses";
            }
        }
    })

    .state('mealDetail', {
        url: '/recipe/:mealId',
        templateUrl: 'templates/mealDetail.html',
        controller: 'mealDetailCtrl',
        resolve: {
              mealId: function($stateParams) {
                  return $stateParams.mealId;
              }
            }
    })



    .state('addMealToPlanner', {
        url: '/page4',
        templateUrl: 'templates/addMealToPlanner.html',
        controller: 'addMealToPlannerCtrl'
    })



    .state('menu', {
        url: '/side-menu21',
        abstract: true,
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



    .state('tabsController', {
        url: '/page6',
        abstract: true,
        templateUrl: 'templates/tabsController.html'
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
    $urlRouterProvider.otherwise('/login');
    //$urlRouterProvider.otherwise('/popular');

});
