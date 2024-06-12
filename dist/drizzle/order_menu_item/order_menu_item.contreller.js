"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderMenuItemData = exports.updateOrderMenuItemData = exports.createOrderMenuItemData = exports.getOneOrderMenuItemsData = exports.getAllOrderMenuItemData = void 0;
const order_menu_item_service_1 = require("./order_menu_item.service");
//fetch all OrderMenuItem
const getAllOrderMenuItemData = async (c) => {
    try {
        //limit the number of OrderMenuItems to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, order_menu_item_service_1.getAllOrderMenuItem)(limit);
        if (data == null || data.length == 0) {
            return c.text("OrderMenuItem not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllOrderMenuItemData = getAllOrderMenuItemData;
// fetch one OrderMenuItem
const getOneOrderMenuItemsData = async (c) => {
    const id = c.req.param("id");
    const OrderMenuItem = await (0, order_menu_item_service_1.fetchOneOrderMenuItem)(parseInt(id));
    if (OrderMenuItem === undefined) {
        return c.json({ message: "No OrderMenuItem found" }, 404);
    }
    return c.json(OrderMenuItem, 200);
};
exports.getOneOrderMenuItemsData = getOneOrderMenuItemsData;
//create OrderMenuItem
const createOrderMenuItemData = async (c, next) => {
    try {
        const OrderMenuItem = await c.req.json();
        const response = await (0, order_menu_item_service_1.CreateOrderMenuItem)(OrderMenuItem);
        return c.json({ message: response }, 201);
    }
    catch (err) {
        return c.json({ message: err }, 500);
    }
};
exports.createOrderMenuItemData = createOrderMenuItemData;
//update OrderMenuItem
const updateOrderMenuItemData = async (c) => {
    try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id))
            return c.text('Invalid id', 400);
        const orderMenuItem = await c.req.json();
        const OrderMenuI = await (0, order_menu_item_service_1.updateOrderMenuItem)(id, orderMenuItem);
        if (!order_menu_item_service_1.updateOrderMenuItem)
            return c.text('Menu_item not updated', 400);
        return c.json({ msg: order_menu_item_service_1.updateOrderMenuItem }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOrderMenuItemData = updateOrderMenuItemData;
//delete OrderMenuItem
const deleteOrderMenuItemData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, order_menu_item_service_1.DeleteOrderMenuItem)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deleteOrderMenuItemData = deleteOrderMenuItemData;
