"use strict";
//Fetch all states
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteState = exports.UpdateState = exports.CreateState = exports.fetchOneState = exports.getAllStates = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db"));
const schema_1 = require("../schema");
// export const getAllStates = async (): Promise<stateselect[] | null> => {
//     return await db.query.stateTable.findMany()
// }
const getAllStates = async (limit) => {
    return await db_1.default.query.stateTable.findMany({
        limit: limit,
        with: {
            cities: {
                columns: { name: true, state_id: true },
            },
        }
    });
};
exports.getAllStates = getAllStates;
// fetch one states
const fetchOneState = async (id) => {
    return await db_1.default.query.stateTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.stateTable.id, id)
    });
};
exports.fetchOneState = fetchOneState;
// create states
const CreateState = async (states) => {
    await db_1.default.insert(schema_1.stateTable).values(states);
    return "state created successfully";
};
exports.CreateState = CreateState;
// update states
const UpdateState = async (id, State) => {
    await db_1.default.update(schema_1.stateTable).set(State).where((0, drizzle_orm_1.eq)(schema_1.stateTable.id, id));
    return "State updated successfully";
};
exports.UpdateState = UpdateState;
// delete states
const DeleteState = async (id) => {
    await db_1.default.delete(schema_1.stateTable).where((0, drizzle_orm_1.eq)(schema_1.stateTable.id, id));
    return "states deleted successfully";
};
exports.DeleteState = DeleteState;
