"use strict";
//Fetch all comments
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteComments = exports.UpdateComments = exports.CreateComments = exports.fetchOneComments = exports.getAllComments = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db"));
const schema_1 = require("../schema");
const getAllComments = async (limit) => {
    // return await db.query.commentsTable.findMany()
    if (limit) {
        return await db_1.default.query.commentsTable.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.commentsTable.findMany();
};
exports.getAllComments = getAllComments;
// fetch one comments
const fetchOneComments = async (id) => {
    return await db_1.default.query.commentsTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.commentsTable.id, id)
    });
};
exports.fetchOneComments = fetchOneComments;
// create comments
const CreateComments = async (comments) => {
    await db_1.default.insert(schema_1.commentsTable).values(comments);
    return "comments created successfully";
};
exports.CreateComments = CreateComments;
// update comments
const UpdateComments = async (id, comments) => {
    await db_1.default.update(schema_1.commentsTable).set(comments).where((0, drizzle_orm_1.eq)(schema_1.commentsTable.id, id));
    return "Address updated successfully";
};
exports.UpdateComments = UpdateComments;
// delete Comments
const DeleteComments = async (id) => {
    await db_1.default.delete(schema_1.commentsTable).where((0, drizzle_orm_1.eq)(schema_1.commentsTable.id, id));
    return "comments deleted successfully";
};
exports.DeleteComments = DeleteComments;
