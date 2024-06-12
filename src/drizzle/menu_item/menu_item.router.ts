import { Hono } from "hono";
import { createMenuItemData, deleteMenuItemData, getAllMenuItemData, getOneMenuItemData, updateMenuItemData } from "./menu_item.contreller";
import { zValidator } from "@hono/zod-validator";
import { menuItemSchema } from "../validators";
import { adminRoleAuth } from "../middleware/bearAuth";


export const menuItemRouter = new Hono();
menuItemRouter.get("/MenuItem", getAllMenuItemData);
menuItemRouter.get("/MenuItem/:id", getOneMenuItemData);
menuItemRouter.post("/MenuItem",createMenuItemData);
menuItemRouter.delete("/MenuItem/:id", deleteMenuItemData);
menuItemRouter.put("/MenuItem/:id", updateMenuItemData);