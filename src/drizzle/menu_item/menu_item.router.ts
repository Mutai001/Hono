import { Hono } from "hono";
import { createMenuItemData, deleteMenuItemData, getAllMenuItemData, getOneMenuItemData, updateMenuItemData } from "./menu_item.contreller";

export const menuItemRouter = new Hono();
menuItemRouter.get("/MenuItem", getAllMenuItemData);
menuItemRouter.get("/MenuItem/:id", getOneMenuItemData);
menuItemRouter.post("/MenuItem", createMenuItemData);
menuItemRouter.delete("/MenuItem/:id", deleteMenuItemData);
menuItemRouter.put("/MenuItem/:id", updateMenuItemData);