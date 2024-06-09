import { Hono } from "hono";
import { createRestautantOwnersData, deleteRestautantOwnersData, getAllRestautantOwnersData, getOneRestautantOwnersData, updateRestautantOwnersData } from "./restaurant_owner.contreller";

export const RestaurantOwnerRouter = new Hono();
RestaurantOwnerRouter.get("/restaurant_owners", getAllRestautantOwnersData);
RestaurantOwnerRouter.get("/restaurant_owners/:id", getOneRestautantOwnersData);
RestaurantOwnerRouter.post("/restaurant_owners", createRestautantOwnersData);
RestaurantOwnerRouter.delete("/restaurant_owners/:id", deleteRestautantOwnersData);
RestaurantOwnerRouter.put("/restaurant_owners/:id", updateRestautantOwnersData);