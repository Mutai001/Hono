import { Hono } from "hono";
import { createRestaurantsData, deleteRestaurantData, getAllRestaurantsData, getOneRestaurantsData, updateRestaurantsData } from "./restaurant.contreller";
import { zValidator } from "@hono/zod-validator";
import { restaurantSchema } from "../validators";
import { adminRoleAuth } from "../middleware/bearAuth";


export const restaurantRouter = new Hono();
restaurantRouter.get("/restaurant", getAllRestaurantsData);
restaurantRouter.get("/restaurant/:id", getOneRestaurantsData);
restaurantRouter.post("/restaurant", createRestaurantsData);
restaurantRouter.delete("/restaurant/:id", deleteRestaurantData);
restaurantRouter.put("/restaurant/:id", updateRestaurantsData);