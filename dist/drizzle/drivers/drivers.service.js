"use strict";
//Fetch all driver
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDriver = exports.UpdateDriver = exports.CreateDriver = exports.fetchOneDriver = exports.getAllDrivers = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db"));
const schema_1 = require("../schema");
const getAllDrivers = async (limit) => {
    if (limit) {
        return await db_1.default.query.driversTable.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.driversTable.findMany();
};
exports.getAllDrivers = getAllDrivers;
// fetch one drivers
const fetchOneDriver = async (id) => {
    return await db_1.default.query.driversTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.driversTable.id, id)
    });
};
exports.fetchOneDriver = fetchOneDriver;
// create driver
const CreateDriver = async (driver) => {
    await db_1.default.insert(schema_1.driversTable).values(driver);
    return "driver created successfully";
};
exports.CreateDriver = CreateDriver;
// update driver
const UpdateDriver = async (id, comments) => {
    await db_1.default.update(schema_1.driversTable).set(comments).where((0, drizzle_orm_1.eq)(schema_1.driversTable.id, id));
    return "Address updated successfully";
};
exports.UpdateDriver = UpdateDriver;
// delete driver
const DeleteDriver = async (id) => {
    await db_1.default.delete(schema_1.driversTable).where((0, drizzle_orm_1.eq)(schema_1.driversTable.id, id));
    return "driver deleted successfully";
};
exports.DeleteDriver = DeleteDriver;
