"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRestaurant = exports.UpdateRestaurant = exports.CreateRestaurant = exports.fetchOneRestaurant = exports.getAllRestaurants = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db"));
const schema_1 = require("../schema");
//Fetch all restaurant
const getAllRestaurants = async (limit) => {
    if (limit) {
        return await db_1.default.query.restaurantTable.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.restaurantTable.findMany();
};
exports.getAllRestaurants = getAllRestaurants;
// fetch one restaurant
const fetchOneRestaurant = async (id) => {
    return await db_1.default.query.restaurantTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurantTable.id, id)
    });
};
exports.fetchOneRestaurant = fetchOneRestaurant;
// create restaurant
const CreateRestaurant = async (restaurant) => {
    await db_1.default.insert(schema_1.restaurantTable).values(restaurant);
    return "restaurant created successfully";
};
exports.CreateRestaurant = CreateRestaurant;
// update restaurant
const UpdateRestaurant = async (id, Restaurant) => {
    await db_1.default.update(schema_1.restaurantTable).set(Restaurant).where((0, drizzle_orm_1.eq)(schema_1.restaurantTable.id, id));
    return "Restaurant updated successfully";
};
exports.UpdateRestaurant = UpdateRestaurant;
// delete restaurant
const DeleteRestaurant = async (id) => {
    await db_1.default.delete(schema_1.restaurantTable).where((0, drizzle_orm_1.eq)(schema_1.restaurantTable.id, id));
    return "restaurant deleted successfully";
};
exports.DeleteRestaurant = DeleteRestaurant;
