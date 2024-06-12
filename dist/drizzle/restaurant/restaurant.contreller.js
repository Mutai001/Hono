"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantData = exports.updateRestaurantsData = exports.createRestaurantsData = exports.getOneRestaurantsData = exports.getAllRestaurantsData = void 0;
const restaurant_service_1 = require("./restaurant.service");
//fetch all restaurant
const getAllRestaurantsData = async (c) => {
    try {
        //limit the number of Restaurants to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, restaurant_service_1.getAllRestaurants)(limit);
        if (data == null || data.length == 0) {
            return c.text("Restaurant not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllRestaurantsData = getAllRestaurantsData;
// fetch one restaurants
const getOneRestaurantsData = async (c) => {
    const id = c.req.param("id");
    const restaurants = await (0, restaurant_service_1.fetchOneRestaurant)(parseInt(id));
    if (restaurants === undefined) {
        return c.json({ message: "No restaurant found" }, 404);
    }
    return c.json(restaurants, 200);
};
exports.getOneRestaurantsData = getOneRestaurantsData;
//create restaurants 
const createRestaurantsData = async (c, next) => {
    try {
        const restaurants = await c.req.json();
        const response = await (0, restaurant_service_1.CreateRestaurant)(restaurants);
        return c.json({ message: response }, 201);
    }
    catch (err) {
        return c.json({ message: err }, 500);
    }
};
exports.createRestaurantsData = createRestaurantsData;
//update restaurant
const updateRestaurantsData = async (c) => {
};
exports.updateRestaurantsData = updateRestaurantsData;
//delete restaurant
const deleteRestaurantData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, restaurant_service_1.DeleteRestaurant)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deleteRestaurantData = deleteRestaurantData;
