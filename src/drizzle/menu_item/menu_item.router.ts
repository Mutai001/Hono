import { Hono } from "hono";
import { createMenuItemData, deleteMenuItemData, getAllMenuItemData, getOneMenuItemData, updateMenuItemData } from "./menu_item.contreller";
import { zValidator } from "@hono/zod-validator";
import { menuItemSchema } from "../validators";
import { adminRoleAuth } from "../middleware/bearAuth";


export const menuItemRouter = new Hono();
menuItemRouter.get("/MenuItem", getAllMenuItemData);
menuItemRouter.get("/MenuItem/:id", getOneMenuItemData);
menuItemRouter.post("/MenuItem", adminRoleAuth, zValidator('json', menuItemSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createMenuItemData);
menuItemRouter.delete("/MenuItem/:id",adminRoleAuth, deleteMenuItemData);
menuItemRouter.put("/MenuItem/:id",adminRoleAuth, updateMenuItemData);