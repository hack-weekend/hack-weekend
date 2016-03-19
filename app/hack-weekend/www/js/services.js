angular.module('app.services', [])

    .factory('BlankFactory', [function() {

    }])

    .service('GetMealService', ['$http', function($http) {
        var res = {};

        //var promise = $http.get('http://localhost:3000/recipes/' + mealId).success(function(data) {
        var promise = function(mealId) {
            return $http.get('http://localhost:3000/recipes/' + mealId).success(function(data) {
                res = data.recipe;
            });
        };
        return {
            promise: promise,
            getMeal: function() {
                return res;
            }
        };
    }])

    .service('AddMealService', ['$http', 'DataService', function($http, DataService) {
        var meal = {};
        return {
            init: function(recipeId, recipeName, servings) {
                meal = {
                    recipeId: recipeId,
                    recipeName: recipeName,
                    servings: servings.toString(),
                    date: null,
                    assigned: null
                };
            },
            getServings: function() {
                return meal.servings;
            },
            finalizeMeal: function(selected, assigned) {
                meal.date = selected.date;
                meal.assigned = assigned.toString();

                return DataService.addMeal(meal);
            }
        };
    }])

    .service('UserService', ['$http', function($http) {
        var myFbId = "";
        var myHouseId = "";

        return {
            login: function(fbId) {
                myFbId = fbId;
                console.log("login" + myFbId);
            },
            setUsersHouse: function(houseId) {
                myHouseId = houseId;
                //TODO - call User API
            },
            getUser: function() {
                return {
                    fbId: myFbId,
                    houseId: myHouseId
                };
            }
        };
    }])

    .service('DataService', ['$http', '$q', function($http, $q) {
        var offline = true;

        return {
            getRecipes: function(category) {
                if (offline) {
                    return $q(function(resolve, reject) { resolve({ data: Mocks.recipesResponse }) });
                }
                else {
                    return $http.get('http://localhost:3000/recipes?category=' + category);
                }
            },
            getRecipe: function(recipeId) {
                if (offline) {
                    return $q(function(resolve, reject) { resolve({ data: Mocks.recipeResponse }) });
                }
                else {
                    return $http.get('http://localhost:3000/recipes/' + recipeId);
                }
            },
            addRecipe: function(recipe) {
                if (offline) {
                    return $q(function(resolve, reject) { resolve({ data: Mocks.postSuccessResponse }) });
                }
                else {
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:3000/recipes',
                        data: recipe
                    });
                }
            },
            getHouses: function() {
                if (offline) {
                    return $q(function(resolve, reject) { resolve({ data: Mocks.housesResponse }) });
                }
                else {
                    return $http.get('http://localhost:3000/houses');
                }
            },
            getHouse: function(houseId) {
                if (offline) {
                    return $q(function(resolve, reject) { resolve({ data: Mocks.houseResponse.house }) });
                }
                else {
                    return $http.get('http://localhost:3000/houses/' + houseId);
                }
            },
            addHouse: function(house) {
                if (offline) {
                    return $q(function(resolve, reject) { resolve(Mocks.postSuccessResponse) });
                }
                else {
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:3000/houses/',
                        data: house
                    });
                }
            },
            addMeal: function(meal, houseId) {
                if (offline) {
                    return $q(function(resolve, reject) { resolve(Mocks.postSuccessResponse) });
                }
                else {
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:3000/houses/' + houseId + '/meals',
                        data: meal
                    });
                }
            },
            getUser: function(userId) {
                if (offline) {
                    return $q(function(resolve, reject) { resolve({ data: Mocks.userResponse }) });
                }
                else {
                    return $http.get('http://localhost:3000/users/' + userId);
                }
            },
            addUser: function(user) {
                if (offline) {
                    return $q(function(resolve, reject) { resolve({ data: Mocks.userResponse }) });
                }
                else {
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:3000/users',
                        data: user
                    });
                }
            }
        };
    }])

    .service('CalendarService', ['DataService', '$q', function(DataService, $q) {
        return {
            getMealDiary: function(offset, limit) {     //offset & limit from today
                return $q(function(resolve, reject) {
                    var days = [];
                    for (var i = 0; i < limit; i++) {
                        var day = new Date();
                        day.setDate(day.getDate() + i + offset);     //increment until limit 
                        days.push({ date: day.toDateString() });

                    }
                    DataService.getHouse().then(function(response) {
                        var house = response.data;
                        for (var i = 0; i < house.meals.length; i++) {
                            for (var j = 0; j < days.length; j++) {
                                var dayObj = days[j];
                                var meal = house.meals[i];
                                if (meal.date === dayObj.date) {
                                    dayObj.meal = meal;
                                    days[j] = dayObj;
                                    break;
                                }
                            }
                        };
                        resolve(days);
                    });
                });
            },
            addMealToDiary: null
        };
    }])

    .service('ShoppingListService', ['DataService', 'CalendarService', '$q', function(DataService, CalendarService, $q) {
        return {
            getShoppingList: function(offset, limit) {    //iterate through calendar, get ingreds for each meal, mashup
                return $q(function(resolve, reject) {
                    var shoppingList = {};
                    var shoppingListArray = [];

                    CalendarService.getMealDiary(offset, limit).then(function(days) {
                        DataService.getRecipes().then(function(recipes) {
                            recipes = recipes.data.results;
                            for (var i = 0; i < days.length; i++) {
                                var meal = days[i].meal;
                                for (var j = 0; j < recipes.length; j++) {
                                    var recipe = recipes[j];
                                    if(!meal) {
                                        break;
                                    }
                                    if (meal.recipeId === recipe._id) {
                                        recipe.ingredients.forEach(function(ingredient) {
                                            if (shoppingList[ingredient.name]) {
                                                shoppingList[ingredient.name].amount.qty = ingredient.amount.qty + shoppingList[ingredient.name].amount.qty;
                                            }
                                            else {
                                                shoppingList[ingredient.name] = ingredient;
                                            }
                                        });
                                    }
                                }
                            }
                            for(key in shoppingList){
                                shoppingListArray.push(shoppingList[key]);
                            }
                            resolve(shoppingListArray);
                        });
                    });
                });
            }
        };
    }])

    .service('BlankService', [function() {

    }]);
