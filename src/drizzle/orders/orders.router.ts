import { Hono } from "hono";
import { createOrdersData, deleteOrdersData, getAllOrdersData, getOneOrdersData, updateOrdersData } from "./orders.contreller";

export const ordersRouter = new Hono();
ordersRouter.get("/orders", getAllOrdersData);
ordersRouter.get("/orders/:id", getOneOrdersData);
ordersRouter.post("/orders", createOrdersData);
ordersRouter.delete("/orders/:id", deleteOrdersData);
ordersRouter.put("/orders/:id", updateOrdersData);