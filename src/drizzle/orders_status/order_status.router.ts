import { Hono } from "hono";
import { createOrderstatusData, deleteOrderStatusData, getAllOrderStatusData, getOneOrderStatusData, updateOrderStatusData } from "./order_status.contreller";
import { zValidator } from "@hono/zod-validator";
import { orderStatusSchema } from "../validators";
import { adminRoleAuth,userRoleAuth } from "../middleware/bearAuth";


export const OrderStatusRouter = new Hono();
OrderStatusRouter.get("/OrderStatus", getAllOrderStatusData);
OrderStatusRouter.get("/OrderStatus/:id", userRoleAuth,getOneOrderStatusData);
OrderStatusRouter.post("/OrderStatus",createOrderstatusData);
OrderStatusRouter.delete("/OrderStatus/:id", deleteOrderStatusData);
OrderStatusRouter.put("/OrderStatus/:id",  updateOrderStatusData);