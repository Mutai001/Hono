import { Hono } from "hono";
import { getAllOrderMenuItemData, deleteOrderMenuItemData, createOrderMenuItemData, getOneOrderMenuItemsData, updateOrderMenuItemData } from "./order_menu_item.contreller";
import { zValidator } from "@hono/zod-validator";
import { orderMenuItemSchema } from "../validators";
import { adminRoleAuth,userRoleAuth } from "../middleware/bearAuth";


export const OrderMenuItemRouter = new Hono();
OrderMenuItemRouter.get("/OrderMenuItem", getAllOrderMenuItemData);
OrderMenuItemRouter.get("/OrderMenuItem/:id", getOneOrderMenuItemsData);
OrderMenuItemRouter.post("/OrderMenuItem", createOrderMenuItemData);
OrderMenuItemRouter.delete("/OrderMenuItem/:id", deleteOrderMenuItemData);
OrderMenuItemRouter.put("/OrderMenuItem/:id", updateOrderMenuItemData);