"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = exports.UpdateUser = exports.CreateUser = exports.fetchOneUsers = exports.getAllUsers = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db"));
const schema_1 = require("../schema");
//Fetch all user
const getAllUsers = async (limit) => {
    return await db_1.default.query.usersTable.findMany({
        limit: limit,
        with: {
            orders: {
                columns: { price: true }
            },
            addresses: {
                columns: { street_address_1: true, street_address_2: true }
            },
            drivers: {
                columns: { car_make: true, car_model: true, car_year: true, online: true }
            },
        }
    });
    return await db_1.default.query.usersTable.findMany();
};
exports.getAllUsers = getAllUsers;
// fetch one user
const fetchOneUsers = async (id) => {
    return await db_1.default.query.usersTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.usersTable.id, id)
    });
};
exports.fetchOneUsers = fetchOneUsers;
// create user
const CreateUser = async (user) => {
    await db_1.default.insert(schema_1.usersTable).values(user);
    return "User created successfully";
};
exports.CreateUser = CreateUser;
// update user
const UpdateUser = async (id, Address) => {
    await db_1.default.update(schema_1.usersTable).set(Address).where((0, drizzle_orm_1.eq)(schema_1.usersTable.id, id));
    return "Address updated successfully";
};
exports.UpdateUser = UpdateUser;
// delete user
const DeleteUser = async (id) => {
    await db_1.default.delete(schema_1.usersTable).where((0, drizzle_orm_1.eq)(schema_1.usersTable.id, id));
    return "User deleted successfully";
};
exports.DeleteUser = DeleteUser;
