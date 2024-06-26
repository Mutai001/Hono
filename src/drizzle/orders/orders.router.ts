import { Hono } from "hono";
import { createOrdersData, deleteOrdersData, getAllOrdersData, getOneOrdersData, updateOrdersData } from "./orders.contreller";
import { zValidator } from "@hono/zod-validator";
import { orderSchema } from "../validators";
import { adminRoleAuth,userRoleAuth } from "../middleware/bearAuth";

export const ordersRouter = new Hono();
ordersRouter.get("/orders", getAllOrdersData);
ordersRouter.get("/orders/:id", getOneOrdersData);
ordersRouter.post("/orders", createOrdersData);
ordersRouter.delete("/orders/:id", deleteOrdersData);
ordersRouter.put("/orders/:id", updateOrdersData);