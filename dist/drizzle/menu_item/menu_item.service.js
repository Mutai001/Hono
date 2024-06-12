"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMenuItem = exports.UpdateMenuItem = exports.CreateMenuItem = exports.fetchOneMenuItem = exports.getAllMenuItem = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db"));
const schema_1 = require("../schema");
//Fetch all menuItem
const getAllMenuItem = async (limit) => {
    if (limit) {
        return await db_1.default.query.menuItemsTable.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.menuItemsTable.findMany();
};
exports.getAllMenuItem = getAllMenuItem;
// fetch one menuItem
const fetchOneMenuItem = async (id) => {
    return await db_1.default.query.menuItemsTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.menuItemsTable.id, id)
    });
};
exports.fetchOneMenuItem = fetchOneMenuItem;
// create menuItem
const CreateMenuItem = async (menuItem) => {
    await db_1.default.insert(schema_1.menuItemsTable).values(menuItem);
    return "menuItem created successfully";
};
exports.CreateMenuItem = CreateMenuItem;
// update menuItem
const UpdateMenuItem = async (id, menuItems) => {
    await db_1.default.update(schema_1.menuItemsTable).set(menuItems).where((0, drizzle_orm_1.eq)(schema_1.menuItemsTable.id, id));
    return "MenuItem updated successfully";
};
exports.UpdateMenuItem = UpdateMenuItem;
// delete menuItem
const DeleteMenuItem = async (id) => {
    await db_1.default.delete(schema_1.menuItemsTable).where((0, drizzle_orm_1.eq)(schema_1.menuItemsTable.id, id));
    return "menuItem deleted successfully";
};
exports.DeleteMenuItem = DeleteMenuItem;
