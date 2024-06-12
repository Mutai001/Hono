"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantRouter = void 0;
const hono_1 = require("hono");
const restaurant_contreller_1 = require("./restaurant.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.restaurantRouter = new hono_1.Hono();
exports.restaurantRouter.get("/restaurant", restaurant_contreller_1.getAllRestaurantsData);
exports.restaurantRouter.get("/restaurant/:id", restaurant_contreller_1.getOneRestaurantsData);
exports.restaurantRouter.post("/restaurant", bearAuth_1.adminRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.restaurantSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), restaurant_contreller_1.createRestaurantsData);
exports.restaurantRouter.delete("/restaurant/:id", bearAuth_1.adminRoleAuth, restaurant_contreller_1.deleteRestaurantData);
exports.restaurantRouter.put("/restaurant/:id", bearAuth_1.adminRoleAuth, restaurant_contreller_1.updateRestaurantsData);
