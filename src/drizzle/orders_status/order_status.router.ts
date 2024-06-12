import { Hono } from "hono";
import { createOrderstatusData, deleteOrderStatusData, getAllOrderStatusData, getOneOrderStatusData, updateOrderStatusData } from "./order_status.contreller";
import { zValidator } from "@hono/zod-validator";
import { orderStatusSchema } from "../validators";
import { adminRoleAuth,userRoleAuth } from "../middleware/bearAuth";


export const OrderStatusRouter = new Hono();
OrderStatusRouter.get("/OrderStatus", adminRoleAuth,getAllOrderStatusData);
OrderStatusRouter.get("/OrderStatus/:id", userRoleAuth,getOneOrderStatusData);
OrderStatusRouter.post("/OrderStatus", adminRoleAuth, zValidator('json', orderStatusSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}),createOrderstatusData);
OrderStatusRouter.delete("/OrderStatus/:id", adminRoleAuth,deleteOrderStatusData);
OrderStatusRouter.put("/OrderStatus/:id", adminRoleAuth, updateOrderStatusData);