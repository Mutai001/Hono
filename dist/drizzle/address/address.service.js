"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddress = exports.updateAddress = exports.createAddress = exports.fetchOneAddress = exports.fetchAllAddress = void 0;
const schema_1 = require("../schema");
const db_1 = __importDefault(require("../db"));
const drizzle_orm_1 = require("drizzle-orm");
//fetching all address
const fetchAllAddress = async (limit) => {
    if (limit) {
        return await db_1.default.query.addressTable.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.addressTable.findMany();
};
exports.fetchAllAddress = fetchAllAddress;
//fetching one address
const fetchOneAddress = async (id) => {
    return await db_1.default.query.addressTable.findFirst({ where: (0, drizzle_orm_1.eq)(schema_1.addressTable.id, id) });
};
exports.fetchOneAddress = fetchOneAddress;
//creating a address
const createAddress = async (address) => {
    await db_1.default.insert(schema_1.addressTable).values(address);
    return "Address created successfully";
};
exports.createAddress = createAddress;
//updating a address
const updateAddress = async (id, address) => {
    await db_1.default.update(schema_1.addressTable).set(address).where((0, drizzle_orm_1.eq)(schema_1.addressTable.id, id));
    return "Address updated successfully";
};
exports.updateAddress = updateAddress;
//deleting a address
const deleteAddress = async (id) => {
    await db_1.default.delete(schema_1.addressTable).where((0, drizzle_orm_1.eq)(schema_1.addressTable.id, id));
    return "Address deleted successfully";
};
exports.deleteAddress = deleteAddress;
