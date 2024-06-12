"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrdersData = exports.updateOrdersData = exports.createOrdersData = exports.getOneOrdersData = exports.getAllOrdersData = void 0;
const orders_service_1 = require("./orders.service");
//fetch all orders
const getAllOrdersData = async (c) => {
    try {
        //limit the number of OrderMenuItems to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, orders_service_1.getAllOrders)(limit);
        if (data == null || data.length == 0) {
            return c.text("OrderMenuItem not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllOrdersData = getAllOrdersData;
// fetch one orders
const getOneOrdersData = async (c) => {
    const id = c.req.param("id");
    const orders = await (0, orders_service_1.fetchOneOrders)(parseInt(id));
    if (orders === undefined) {
        return c.json({ message: "No orders found" }, 404);
    }
    return c.json(orders, 200);
};
exports.getOneOrdersData = getOneOrdersData;
//create orders
const createOrdersData = async (c, next) => {
    try {
        const orders = await c.req.json();
        const response = await (0, orders_service_1.CreateOrder)(orders);
        return c.json({ message: response }, 201);
    }
    catch (err) {
        return c.json({ message: err }, 500);
    }
};
exports.createOrdersData = createOrdersData;
//update orders
const updateOrdersData = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const Order = await c.req.json();
    try {
        // search for the Order
        const searchedOrder = await (0, orders_service_1.getAllOrders)(id);
        if (searchedOrder == undefined)
            return c.text("Order not found", 404);
        // get the data and update it
        const res = await (0, orders_service_1.UpdateOrders)(id, Order);
        // return a success message
        if (!res)
            return c.text("Order not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOrdersData = updateOrdersData;
//delete orders
const deleteOrdersData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, orders_service_1.DeleteOrder)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deleteOrdersData = deleteOrdersData;
