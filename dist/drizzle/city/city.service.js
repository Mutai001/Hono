"use strict";
//Fetch all city
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCity = exports.UpdateCity = exports.CreateCity = exports.fetchOneCity = exports.getAllCity = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db"));
const schema_1 = require("../schema");
const getAllCity = async (limit) => {
    // return await db.query.cityTable.findMany()
    if (limit) {
        return await db_1.default.query.cityTable.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.cityTable.findMany();
};
exports.getAllCity = getAllCity;
// fetch one city
const fetchOneCity = async (id) => {
    return await db_1.default.query.cityTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.cityTable.id, id)
    });
};
exports.fetchOneCity = fetchOneCity;
// create city
const CreateCity = async (city) => {
    await db_1.default.insert(schema_1.cityTable).values(city);
    return "city created successfully";
};
exports.CreateCity = CreateCity;
// update city
const UpdateCity = async (id, city) => {
    await db_1.default.update(schema_1.cityTable).set(city).where((0, drizzle_orm_1.eq)(schema_1.cityTable.id, id));
    return "Address updated successfully";
};
exports.UpdateCity = UpdateCity;
// delete city
const DeleteCity = async (id) => {
    await db_1.default.delete(schema_1.cityTable).where((0, drizzle_orm_1.eq)(schema_1.cityTable.id, id));
    return "city deleted successfully";
};
exports.DeleteCity = DeleteCity;
