import { Hono } from "hono";
import { createRestaurantsData, deleteRestaurantData, getAllRestaurantsData, getOneRestaurantsData, updateRestaurantsData } from "./restaurant.contreller";

export const restaurantRouter = new Hono();
restaurantRouter.get("/restaurant", getAllRestaurantsData);
restaurantRouter.get("/restaurant/:id", getOneRestaurantsData);
restaurantRouter.post("/restaurant", createRestaurantsData);
restaurantRouter.delete("/restaurant/:id", deleteRestaurantData);
restaurantRouter.put("/restaurant/:id", updateRestaurantsData);