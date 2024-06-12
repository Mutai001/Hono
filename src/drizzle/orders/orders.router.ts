import { Hono } from "hono";
import { createOrdersData, deleteOrdersData, getAllOrdersData, getOneOrdersData, updateOrdersData } from "./orders.contreller";
import { zValidator } from "@hono/zod-validator";
import { orderSchema } from "../validators";
import { adminRoleAuth,userRoleAuth } from "../middleware/bearAuth";

export const ordersRouter = new Hono();
ordersRouter.get("/orders",adminRoleAuth, getAllOrdersData);
ordersRouter.get("/orders/:id",adminRoleAuth, getOneOrdersData);
ordersRouter.post("/orders", userRoleAuth, zValidator('json', orderSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}),createOrdersData);
ordersRouter.delete("/orders/:id",userRoleAuth, deleteOrdersData);
ordersRouter.put("/orders/:id", userRoleAuth, updateOrdersData);