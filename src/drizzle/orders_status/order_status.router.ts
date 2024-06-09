import { Hono } from "hono";
import { createOrderstatusData, deleteOrderStatusData, getAllOrderStatusData, getOneOrderStatusData, updateOrderStatusData } from "./order_status.contreller";

export const OrderStatusRouter = new Hono();
OrderStatusRouter.get("/OrderStatus", getAllOrderStatusData);
OrderStatusRouter.get("/OrderStatus/:id", getOneOrderStatusData);
OrderStatusRouter.post("/OrderStatus", createOrderstatusData);
OrderStatusRouter.delete("/OrderStatus/:id", deleteOrderStatusData);
OrderStatusRouter.put("/OrderStatus/:id", updateOrderStatusData);