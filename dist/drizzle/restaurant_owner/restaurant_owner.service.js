"use strict";
//Fetch all RestautantOwner
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRestautantOwner = exports.UpdateRestautantOwner = exports.CreateRestautantOwner = exports.fetchOneRestautantOwners = exports.getAllRestautantOwners = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db"));
const schema_1 = require("../schema");
const getAllRestautantOwners = async (limit) => {
    if (limit) {
        return await db_1.default.query.restaurantOwnerTable.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.restaurantOwnerTable.findMany();
};
exports.getAllRestautantOwners = getAllRestautantOwners;
// fetch one RestautantOwner
const fetchOneRestautantOwners = async (id) => {
    return await db_1.default.query.restaurantOwnerTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurantOwnerTable.id, id)
    });
};
exports.fetchOneRestautantOwners = fetchOneRestautantOwners;
// create RestautantOwner
const CreateRestautantOwner = async (restaurant_owner) => {
    await db_1.default.insert(schema_1.restaurantOwnerTable).values(restaurant_owner);
    return "Restaurant_owner created successfully";
};
exports.CreateRestautantOwner = CreateRestautantOwner;
// update RestautantOwner
const UpdateRestautantOwner = async (id, RestuarantOwner) => {
    await db_1.default.update(schema_1.restaurantOwnerTable).set(RestuarantOwner).where((0, drizzle_orm_1.eq)(schema_1.restaurantOwnerTable.id, id));
    return "RestuarantOwner updated successfully";
};
exports.UpdateRestautantOwner = UpdateRestautantOwner;
// delete RestautantOwner
const DeleteRestautantOwner = async (id) => {
    await db_1.default.delete(schema_1.restaurantOwnerTable).where((0, drizzle_orm_1.eq)(schema_1.restaurantOwnerTable.id, id));
    return "RestautantOwner deleted successfully";
};
exports.DeleteRestautantOwner = DeleteRestautantOwner;
