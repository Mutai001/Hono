"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenuItemData = exports.updateMenuItemData = exports.createMenuItemData = exports.getOneMenuItemData = exports.getAllMenuItemData = void 0;
const menu_item_service_1 = require("./menu_item.service");
//fetch all a
const getAllMenuItemData = async (c) => {
    try {
        //limit the number of menuItem to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, menu_item_service_1.getAllMenuItem)(limit);
        if (data == null || data.length == 0) {
            return c.text("Menu not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllMenuItemData = getAllMenuItemData;
// fetch one menuItem
const getOneMenuItemData = async (c) => {
    const id = c.req.param("id");
    const menuItem = await (0, menu_item_service_1.fetchOneMenuItem)(parseInt(id));
    if (menuItem === undefined) {
        return c.json({ message: "No menuItem found" }, 404);
    }
    return c.json(menuItem, 200);
};
exports.getOneMenuItemData = getOneMenuItemData;
//create menuItem
const createMenuItemData = async (c, next) => {
    try {
        const menuItem = await c.req.json();
        const response = await (0, menu_item_service_1.CreateMenuItem)(menuItem);
        return c.json({ message: response }, 201);
    }
    catch (err) {
        return c.json({ message: err?.message }, 500);
    }
};
exports.createMenuItemData = createMenuItemData;
//update menuItem
const updateMenuItemData = async (c) => {
    try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id))
            return c.text('Invalid id', 400);
        const menuItem = await c.req.json();
        const MenuItem = await (0, menu_item_service_1.UpdateMenuItem)(id, menuItem);
        if (!menu_item_service_1.UpdateMenuItem)
            return c.text('Menu_item not updated', 400);
        return c.json({ msg: menu_item_service_1.UpdateMenuItem }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateMenuItemData = updateMenuItemData;
//delete menuItem
const deleteMenuItemData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, menu_item_service_1.DeleteMenuItem)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deleteMenuItemData = deleteMenuItemData;
