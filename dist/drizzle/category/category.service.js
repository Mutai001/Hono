"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategory = exports.updateCategory = exports.CreateCategory = exports.fetchOneCategory = exports.getAllCategory = void 0;
const db_1 = __importDefault(require("../db"));
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
//fetching all categories
const getAllCategory = async (limit) => {
    if (limit) {
        return await db_1.default.query.categoryTable.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.categoryTable.findMany();
};
exports.getAllCategory = getAllCategory;
//fetching one category
const fetchOneCategory = async (id) => {
    return await db_1.default.query.categoryTable.findFirst({ where: (0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id) });
};
exports.fetchOneCategory = fetchOneCategory;
//creating a category
const CreateCategory = async (category) => {
    await db_1.default.insert(schema_1.categoryTable).values(category);
    return "category created successfully";
};
exports.CreateCategory = CreateCategory;
//updating a category
const updateCategory = async (id, category) => {
    await db_1.default.update(schema_1.categoryTable).set(category).where((0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id));
    return "category updated successfully";
};
exports.updateCategory = updateCategory;
//deleting a category
const DeleteCategory = async (id) => {
    await db_1.default.delete(schema_1.categoryTable).where((0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id));
    return "category deleted successfully";
};
exports.DeleteCategory = DeleteCategory;
