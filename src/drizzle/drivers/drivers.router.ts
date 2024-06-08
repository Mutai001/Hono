import { Hono } from "hono";
import { createDriverData, deleteDriverData, getAllDriversData, getOneDriverData, updateDriverData } from "./drivers.contreller";

export const UserRouter = new Hono();
UserRouter.get("/users", getAllDriversData);
UserRouter.get("/users/:id", getOneDriverData);
UserRouter.post("/users", createDriverData);
UserRouter.delete("/users/:id", deleteDriverData);
UserRouter.put("/users/:id", updateDriverData);