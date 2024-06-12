"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderMenuItem = exports.updateOrderMenuItem = exports.CreateOrderMenuItem = exports.fetchOneOrderMenuItem = exports.getAllOrderMenuItem = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db"));
const schema_1 = require("../schema");
//Fetch limit OrderMenuItem
const getAllOrderMenuItem = async (limit) => {
    if (limit) {
        return await db_1.default.query.orderMenuItemTable.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.orderMenuItemTable.findMany();
};
exports.getAllOrderMenuItem = getAllOrderMenuItem;
// fetch one OrderMenuItem
const fetchOneOrderMenuItem = async (id) => {
    return await db_1.default.query.orderMenuItemTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.orderMenuItemTable.id, id)
    });
};
exports.fetchOneOrderMenuItem = fetchOneOrderMenuItem;
// create OrderMenuItem
const CreateOrderMenuItem = async (OrderMenuItem) => {
    await db_1.default.insert(schema_1.orderMenuItemTable).values(OrderMenuItem);
    return "OrderMenuItem created successfully";
};
exports.CreateOrderMenuItem = CreateOrderMenuItem;
// update OrderMenuItem
const updateOrderMenuItem = async (id, ordermenuItems) => {
    await db_1.default.update(schema_1.orderMenuItemTable).set(ordermenuItems).where((0, drizzle_orm_1.eq)(schema_1.orderMenuItemTable.id, id));
    return "MenuItem updated successfully";
};
exports.updateOrderMenuItem = updateOrderMenuItem;
// delete OrderMenuItem
const DeleteOrderMenuItem = async (id) => {
    await db_1.default.delete(schema_1.orderMenuItemTable).where((0, drizzle_orm_1.eq)(schema_1.orderMenuItemTable.id, id));
    return "OrderMenuItem deleted successfully";
};
exports.DeleteOrderMenuItem = DeleteOrderMenuItem;
