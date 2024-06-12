"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrder = exports.UpdateOrders = exports.CreateOrder = exports.fetchOneOrders = exports.getAllOrders = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db"));
const schema_1 = require("../schema");
//Fetch all Orders
const getAllOrders = async (limit) => {
    if (limit) {
        return await db_1.default.query.ordersTable.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.ordersTable.findMany();
};
exports.getAllOrders = getAllOrders;
// fetch one orders
const fetchOneOrders = async (id) => {
    return await db_1.default.query.ordersTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.ordersTable.id, id)
    });
};
exports.fetchOneOrders = fetchOneOrders;
// create Orders
const CreateOrder = async (Orders) => {
    await db_1.default.insert(schema_1.ordersTable).values(Orders);
    return "Order created successfully";
};
exports.CreateOrder = CreateOrder;
// update Order
const UpdateOrders = async (id, Order) => {
    await db_1.default.update(schema_1.ordersTable).set(Order).where((0, drizzle_orm_1.eq)(schema_1.ordersTable.id, id));
    return "Order updated successfully";
};
exports.UpdateOrders = UpdateOrders;
// delete Order
const DeleteOrder = async (id) => {
    await db_1.default.delete(schema_1.ordersTable).where((0, drizzle_orm_1.eq)(schema_1.ordersTable.id, id));
    return "Orders deleted successfully";
};
exports.DeleteOrder = DeleteOrder;
