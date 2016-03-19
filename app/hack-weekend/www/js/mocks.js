var Mocks = {
    housesResponse: {
        "results": [
            {
                "_id": "56b770a90d2924d267c4e838",
                "__v": 23,
                "meals": [
                    {
                        "recipeId": "56b770a30d2924d267c4e831",
                        "recipeName": "Spaghetti Bolognese",
                        "servings": 1,
                        "date": new Date().toDateString(),
                        "assigned": "Josh",
                        "_id": "56de0ff20dfbfffb04e5d2b5"
                    }
                ],
                "members": [
                    {
                        "name": "Josh",
                        "_id": "56b770a90d2924d267c4e83b",
                        "preferences": [
                            "high-fibre"
                        ]
                    }
                ]
            },
            {
                "_id": "56b770a90d2924d267c4e837",
                "__v": 23,
                "meals": [
                    {
                        "recipeId": "56b770a30d2924d267c4e831",
                        "recipeName": "Spaghetti Bolognese",
                        "servings": 1,
                        "date": new Date().toDateString(),
                        "assigned": "Oli",
                        "_id": "56de0ff20dfbfffb04e5d2b5"
                    },
                    {
                        "recipeId": "56b770a60d2924d267c4e836",
                        "recipeName": "Chicken Tikka Masala",
                        "servings": 1,
                        "date": new Date(new Date().getDate() + 1).toDateString(),
                        "assigned": "Sean",
                        "_id": "56de10350dfbfffb04e5d2b6"
                    }
                ],
                "members": [
                    {
                        "name": "Oli",
                        "_id": "56b770a90d2924d267c4e83a",
                        "preferences": [
                            "high-fibre"
                        ]
                    },
                    {
                        "name": "Sean",
                        "_id": "56b770a90d2924d267c4e839",
                        "preferences": [
                            "high-carb"
                        ]
                    },
                    {
                        "name": "Mark",
                        "_id": "56b770a90d2924d267c4e838",
                        "preferences": [
                            "high-protein"
                        ]
                    }
                ]
            }
        ],
        "success": true
    },
    houseResponse: {
        "house": {
            "_id": "56b770a90d2924d267c4e837",
            "__v": 23,
            "meals": [
                {
                    "recipeId": "56b770a30d2924d267c4e831",
                    "recipeName": "Spaghetti Bolognese",
                    "servings": 1,
                    "date": new Date().toDateString(),
                    "assigned": "Oli",
                    "_id": "56de0ff20dfbfffb04e5d2b5"
                },
                {
                    "recipeId": "56b770a60d2924d267c4e836",
                    "recipeName": "Chicken Tikka Masala",
                    "servings": 1,
                    "date": new Date(new Date().setDate(new Date().getDate() + 1)).toDateString(),
                    "assigned": "Sean",
                    "_id": "56de10350dfbfffb04e5d2b6"
                }
            ],
            "members": [
                {
                    "name": "Oli",
                    "_id": "56b770a90d2924d267c4e83a",
                    "preferences": [
                        "high-fibre"
                    ]
                },
                {
                    "name": "Sean",
                    "_id": "56b770a90d2924d267c4e839",
                    "preferences": [
                        "high-carb"
                    ]
                },
                {
                    "name": "Mark",
                    "_id": "56b770a90d2924d267c4e838",
                    "preferences": [
                        "high-protein"
                    ]
                }
            ]
        },
        "success": true
    },
    recipesResponse: {
        "results": [{
            "_id": "56b770a30d2924d267c4e831",
            "name": "Spaghetti Bolognese",
            "subtitle": "An italian favourite!",
            "author": "Sean Davis",
            "imageURL": "http://www.butchers-shop.com/media/wysiwyg/bigstock_Spaghetti_bolognese_25274297.jpg",
            "servings": 4,
            "prepTime": 15,
            "overallTime": 45,
            "difficulty": 2,
            "popularity": 100,
            "__v": 0,
            "tags": [
                "italian",
                "high-carb",
                "nut-free"
            ],
            "steps": [
                "Fry the onions",
                "Brown the minced beef",
                "Boil water in a separate pan",
                "Add tomatoes to the beef",
                "Add pasta to the pan",
                "Wait 10 minutes, occasionally stirring",
                "Drain the pasta",
                "Serve up and enjoy!"
            ],
            "ingredients": [{
                "name": "Onion",
                "_id": "56b770a30d2924d267c4e835",
                "amount": {
                    "qty": 2,
                    "units":"large"
                }
            }, {
                    "name": "Minced Beef",
                    "_id": "56b770a30d2924d267c4e834",
                    "amount": {
                        "qty": 500,
                        "units":"g"
                    }
                }, {
                    "name": "Tinned Tomatoes",
                    "_id": "56b770a30d2924d267c4e833",
                    "amount": {
                        "qty": 400,
                        "units":"g"
                    }
                }, {
                    "name": "Wholewheat Spaghetti",
                    "_id": "56b770a30d2924d267c4e832",
                    "amount": {
                        "qty": 200,
                        "units":"g"
                    }
                }]
        }, {
                "_id": "56b770a60d2924d267c4e836",
                "name": "Chicken Tikka Masala",
                "subtitle": "A Friday night treat!",
                "author": "Mark Bridger",
                "imageURL": "http://demo.webulous.in/restaurant/wp-content/uploads/sites/5/2014/06/chiken-tikka-masala_0.png.jpg",
                "__v": 0,
                "tags": [],
                "steps": [],
                "ingredients": []
            }, {
                "_id": "56b771820d2924d267c4e83b",
                "name": "Fajita",
                "author": "Hota Mansella",
                "imageURL": "http://orsimages.unileversolutions.com/ORS_Images/Knorr_en-GB/Knorr_Chicken_Fajitas_Using_Mexican_Flavour_Pot_16_1.1.368_326X580.Jpeg",
                "__v": 0,
                "tags": [],
                "steps": [],
                "ingredients": []
            }, {
                "_id": "56b772840d2924d267c4e83c",
                "name": "Lemon Chicken",
                "author": "Oliver Smith",
                "imageURL": "http://cookdiary.net/wp-content/uploads/images/Lemon-Chicken_13750.jpg",
                "__v": 0,
                "tags": [],
                "steps": [],
                "ingredients": []
            }],
        "success": true
    },
    recipeResponse: {
        "recipe": {
            "_id": "56b770a30d2924d267c4e831",
            "name": "Spaghetti Bolognese",
            "subtitle": "An italian favourite!",
            "author": "Sean Davis",
            "imageURL": "http://www.butchers-shop.com/media/wysiwyg/bigstock_Spaghetti_bolognese_25274297.jpg",
            "servings": 4,
            "prepTime": 15,
            "overallTime": 45,
            "difficulty": 2,
            "popularity": 100,
            "__v": 0,
            "tags": [
                "italian",
                "high-carb",
                "nut-free"
            ],
            "steps": [
                "Fry the onions",
                "Brown the minced beef",
                "Boil water in a separate pan",
                "Add tomatoes to the beef",
                "Add pasta to the pan",
                "Wait 10 minutes, occasionally stirring",
                "Drain the pasta",
                "Serve up and enjoy!"
            ],
            "ingredients": [
                {
                    "name": "Onion",
                    "_id": "56b770a30d2924d267c4e835",
                    "amount": {
                        "qty": 2
                    }
                },
                {
                    "name": "Minced Beef",
                    "_id": "56b770a30d2924d267c4e834",
                    "amount": {
                        "qty": 500
                    }
                },
                {
                    "name": "Tinned Tomatoes",
                    "_id": "56b770a30d2924d267c4e833",
                    "amount": {
                        "qty": 400
                    }
                },
                {
                    "name": "Wholewheat Spaghetti",
                    "_id": "56b770a30d2924d267c4e832",
                    "amount": {
                        "qty": 200
                    }
                }
            ]
        },
        "success": true
    },
    userResponse: {
        "user": {
            "_id": "56dc3d6111ce008630d0a58c",
            "fbId": "10153954135517244",
            "houseId": "56b770a90d2924d267c4e837",
            "__v": 0
        },
        "success": true
    },
    postSuccessResponse: {
        success: true
    }
};
