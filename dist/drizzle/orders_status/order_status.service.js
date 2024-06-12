"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderStatus = exports.UpdateOrdersStatus = exports.CreateOrdersStatus = exports.fetchOneOrderStatus = exports.getAllOrderStatus = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db"));
const schema_1 = require("../schema");
//Fetch all OrderStatus
const getAllOrderStatus = async (limit) => {
    if (limit) {
        return await db_1.default.query.ordersStatusTable.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.ordersStatusTable.findMany();
};
exports.getAllOrderStatus = getAllOrderStatus;
// fetch one ordersStatus
const fetchOneOrderStatus = async (id) => {
    return await db_1.default.query.ordersStatusTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.ordersStatusTable.id, id)
    });
};
exports.fetchOneOrderStatus = fetchOneOrderStatus;
// create ordersStatus
const CreateOrdersStatus = async (ordersStatus) => {
    await db_1.default.insert(schema_1.ordersStatusTable).values(ordersStatus);
    return "ordersStatus created successfully";
};
exports.CreateOrdersStatus = CreateOrdersStatus;
// update ordersStatus
const UpdateOrdersStatus = async (id, OrderStatus) => {
    await db_1.default.update(schema_1.ordersStatusTable).set(OrderStatus).where((0, drizzle_orm_1.eq)(schema_1.ordersStatusTable.id, id));
    return "OrderStatus updated successfully";
};
exports.UpdateOrdersStatus = UpdateOrdersStatus;
// delete ordersStatus
const DeleteOrderStatus = async (id) => {
    await db_1.default.delete(schema_1.ordersStatusTable).where((0, drizzle_orm_1.eq)(schema_1.ordersStatusTable.id, id));
    return "ordersStatus deleted successfully";
};
exports.DeleteOrderStatus = DeleteOrderStatus;
