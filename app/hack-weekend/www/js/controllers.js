angular.module('app.controllers', [])

    .controller('browseMealsCtrl', ['$scope', function($scope) {
        $scope.error = "";
        $scope.search = { value: "" };
        $scope.notSupported = function() {
            $scope.error = ($scope.search.value.length > 0 ? "search_not_supported" : "");
        }
    }])

    .controller('mostPopularCtrl', function($scope, category, DataService) {
        DataService.getRecipes(category).then(function(response) {
            $scope.recipes = response.data.results;
        });
    })

    .controller('mealDetailCtrl', function($scope, $state, mealId, AddMealService, DataService) {
        var showingIngredients = true;
        $scope.servings = "";

        DataService.getRecipe(mealId).then(function(response) {
            $scope.recipe = response.data.recipe;
        });

        $scope.isShowingIngredients = function() {
            return showingIngredients;
        };

        $scope.setShowIngredients = function(val) {
            showingIngredients = val;
        };

        $scope.addToPlannerInit = function(servings) {
            if (!servings) {
                $scope.error = "servings_missing";
            } else {
                AddMealService.init($scope.recipe._id, $scope.recipe.name, servings);
                $state.go('addMealToPlanner');
            }
        };

        $scope.resetError = function() {
            $scope.error = "";
        };

    })

    .controller('addMealToPlannerCtrl', function($scope, $http, $state, AddMealService, UserService, CalendarService, DataService) {
        $scope.servings = AddMealService.getServings();
        var user = UserService.getUser();
        $scope.user = user;

        CalendarService.getMealDiary(0, 7).then(function(days) {
            $scope.days = days;
        });
        
        DataService.getHouse().then(function(response) {    
            $scope.members = response.data.members;
        });

        $scope.selectDay = function(day) {
            $scope.selected = day;

        };

        $scope.addMeal = function(assigned) {
            if (!assigned) {
                $scope.error = "member_not_selected";
            }
            else if (!$scope.selected) {
                $scope.error = "day_not_selected";
            }
            else {
                AddMealService.finalizeMeal($scope.selected, assigned).then(function(response) {
                    $state.go('tabsController.mealPlanner');
                });
            }

        };

    })

    .controller('shoppingListCtrl', function($scope, ShoppingListService) {
        ShoppingListService.getShoppingList(0, 7).then(function(shoppingList) {
            $scope.shoppingList = shoppingList;
        });
    })

    .controller('mealPlannerCtrl', function($scope, $http, UserService, CalendarService) {
        var refreshDiary = function() {
            CalendarService.getMealDiary($scope.startDayOffset, 7).then(function(days) {
                $scope.days = days;
            });
        }
        var user = UserService.getUser();
        $scope.user = user;
        $scope.startDayOffset = 0;
        refreshDiary();

        $scope.nextPage = function() {
            $scope.startDayOffset += 7;
            refreshDiary();
        }
        $scope.thisWeek = function() {
            $scope.startDayOffset = 0;
            refreshDiary();
        }
        $scope.prevPage = function() {
            if ($scope.startDayOffset > 0) {
                $scope.startDayOffset -= 7;
                refreshDiary();
            }
        }
    })



    .controller('loginCtrl', function($scope, $state, $q, $ionicLoading, UserService) {

        // This is the success callback from the login method
        var fbLoginSuccess = function(response) {
            if (!response.authResponse) {
                fbLoginError("Cannot find the authResponse");
                return;
            }
            $ionicLoading.hide();
            $state.go('mostPopular');
        };

        // This is the fail callback from the login method
        var fbLoginError = function(error) {
            console.log('fbLoginError', error);
            $ionicLoading.hide();
        };

        // This method is to get the user profile info from the facebook api
        var getFacebookProfileInfo = function(authResponse) {
            var info = $q.defer();

            facebookConnectPlugin.api(
                '/me?fields=email,name&access_token=' +
                authResponse.accessToken, null,
                function(response) {
                    console.log(response);
                    info.resolve(response);
                },
                function(response) {
                    console.log(response);
                    info.reject(response);
                }
            );
            return info.promise;
        };

        //This method is executed when the user press the "Login with facebook" button
        $scope.facebookSignIn = function() {
            facebookConnectPlugin.getLoginStatus(function(success) {
                if (success.status === 'connected') {
                    // The user is logged in and has authenticated your app, and response.authResponse supplies
                    // the user's ID, a valid access token, a signed request, and the time the access token
                    // and signed request each expire
                    console.log('getLoginStatus', success.status);

                    // Check if we have our user saved
                    //var user = UserService.getUser('facebook');

                    // if(!user.userID){
                    // 		getFacebookProfileInfo(success.authResponse)
                    // 		.then(function(profileInfo) {
                    // 			// For the purpose of this example I will store user data on local storage
                    // 			UserService.setUser({
                    // 				authResponse: success.authResponse,
                    // 				userID: profileInfo.id,
                    // 				name: profileInfo.name,
                    // 				email: profileInfo.email,
                    // 				picture : "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
                    // 			});
                    //
                    // 			$state.go('app.home');
                    // 		}, function(fail){
                    // 			// Fail get profile info
                    // 			console.log('profile info fail', fail);
                    // 		});
                    // 	}else{
                    // 		$state.go('app.home');
                    // 	}
                    getFacebookProfileInfo(success.authResponse)
                        .then(function(profileInfo) {
                            UserService.login(profileInfo.id);

                            //temporarily set house
                            UserService.setUsersHouse("56b770a90d2924d267c4e837");

                            $state.go(
                                'tabsController.browseMeals'
                            );
                        });

                } else {
                    // If (success.status === 'not_authorized') the user is logged in to Facebook,
                    // but has not authenticated your app
                    // Else the person is not logged into Facebook,
                    // so we're not sure if they are logged into this app or not.

                    console.log('getLoginStatus', success.status);

                    $ionicLoading.show({
                        template: 'Logging in...'
                    });

                    // Ask the permissions you need. You can learn more about
                    // FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
                    facebookConnectPlugin.login(['email',
                        'public_profile',
                        'user_friends'
                    ], fbLoginSuccess, fbLoginError);
                }
            });
        };
    });
