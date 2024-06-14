"use strict";
//Fetch all statusCatalogTable
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStatusCatalog = exports.UpdateStatusCatalog = exports.CreateStatusCatalog = exports.fetchOneStatusCatalog = exports.getAllStatusCatalog = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db"));
const schema_1 = require("../schema");
const getAllStatusCatalog = async (limit) => {
    return await db_1.default.query.statusCatalogTable.findMany({
        limit: limit,
        with: {
            orderStatus: {
                columns: { id: true, created_at: true, },
            }
        }
    });
    return await db_1.default.query.statusCatalogTable.findMany();
};
exports.getAllStatusCatalog = getAllStatusCatalog;
// fetch one StatusCatalog
const fetchOneStatusCatalog = async (id) => {
    return await db_1.default.query.statusCatalogTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.statusCatalogTable.id, id)
    });
};
exports.fetchOneStatusCatalog = fetchOneStatusCatalog;
// create StatusCatalog
const CreateStatusCatalog = async (status_catalog) => {
    await db_1.default.insert(schema_1.statusCatalogTable).values(status_catalog);
    return "status_catalog created successfully";
};
exports.CreateStatusCatalog = CreateStatusCatalog;
// update status_catalog
const UpdateStatusCatalog = async (id, StatusCatalog) => {
    await db_1.default.update(schema_1.statusCatalogTable).set(StatusCatalog).where((0, drizzle_orm_1.eq)(schema_1.statusCatalogTable.id, id));
    return "StatusCatalog updated successfully";
};
exports.UpdateStatusCatalog = UpdateStatusCatalog;
// delete status_catalog
const DeleteStatusCatalog = async (id) => {
    await db_1.default.delete(schema_1.statusCatalogTable).where((0, drizzle_orm_1.eq)(schema_1.statusCatalogTable.id, id));
    return "status_catalog deleted successfully";
};
exports.DeleteStatusCatalog = DeleteStatusCatalog;
