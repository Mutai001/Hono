"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderStatusData = exports.updateOrderStatusData = exports.createOrderstatusData = exports.getOneOrderStatusData = exports.getAllOrderStatusData = void 0;
const order_status_service_1 = require("./order_status.service");
//fetch all OrderStatus
const getAllOrderStatusData = async (c) => {
    try {
        //limit the number of OrderStatuss to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, order_status_service_1.getAllOrderStatus)(limit);
        if (data == null || data.length == 0) {
            return c.text("OrderStatus not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllOrderStatusData = getAllOrderStatusData;
// fetch one OrderStatus
const getOneOrderStatusData = async (c) => {
    const id = c.req.param("id");
    const OrderStatus = await (0, order_status_service_1.fetchOneOrderStatus)(parseInt(id));
    if (OrderStatus === undefined) {
        return c.json({ message: "No OrderStatus found" }, 404);
    }
    return c.json(OrderStatus, 200);
};
exports.getOneOrderStatusData = getOneOrderStatusData;
//create OrderStatus
const createOrderstatusData = async (c, next) => {
    try {
        const OrderStatus = await c.req.json();
        const response = await (0, order_status_service_1.CreateOrdersStatus)(OrderStatus);
        return c.json({ message: response }, 201);
    }
    catch (err) {
        return c.json({ message: err }, 500);
    }
};
exports.createOrderstatusData = createOrderstatusData;
//update OrderStatus
const updateOrderStatusData = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const OrderStatus = await c.req.json();
    try {
        // search for the OrderStatus
        const searchedOrderStatus = await (0, order_status_service_1.getAllOrderStatus)(id);
        if (searchedOrderStatus == undefined)
            return c.text("OrderStatus not found", 404);
        // get the data and update it
        const res = await (0, order_status_service_1.UpdateOrdersStatus)(id, OrderStatus);
        // return a success message
        if (!res)
            return c.text("OrderStatus not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOrderStatusData = updateOrderStatusData;
//delete OrderStatus
const deleteOrderStatusData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, order_status_service_1.DeleteOrderStatus)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deleteOrderStatusData = deleteOrderStatusData;
