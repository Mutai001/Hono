import { Hono } from "hono";
import { createUsersData, deleteUsersData, getAllUsersData, getOneUsersData, loginUserData, updateUsersData } from "./user.contreller";

export const UserRouter = new Hono();
UserRouter.get("/users", getAllUsersData);
UserRouter.get("/users/:id", getOneUsersData);
UserRouter.post("/users", createUsersData);
UserRouter.delete("/users/:id", deleteUsersData);
UserRouter.put("/users/:id", updateUsersData);
UserRouter.post("/login", loginUserData);