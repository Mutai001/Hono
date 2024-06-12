import { Hono } from "hono";
import { getAllOrderMenuItemData, deleteOrderMenuItemData, createOrderMenuItemData, getOneOrderMenuItemsData, updateOrderMenuItemData } from "./order_menu_item.contreller";
import { zValidator } from "@hono/zod-validator";
import { orderMenuItemSchema } from "../validators";
import { adminRoleAuth,userRoleAuth } from "../middleware/bearAuth";


export const OrderMenuItemRouter = new Hono();
OrderMenuItemRouter.get("/OrderMenuItem", adminRoleAuth,getAllOrderMenuItemData);
OrderMenuItemRouter.get("/OrderMenuItem/:id",adminRoleAuth, getOneOrderMenuItemsData);
OrderMenuItemRouter.post("/OrderMenuItem", userRoleAuth, zValidator('json', orderMenuItemSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createOrderMenuItemData);
OrderMenuItemRouter.delete("/OrderMenuItem/:id",userRoleAuth, deleteOrderMenuItemData);
OrderMenuItemRouter.put("/OrderMenuItem/:id",userRoleAuth, updateOrderMenuItemData);