"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = exports.createAuthUserService = void 0;
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const drizzle_orm_1 = require("drizzle-orm");
// register user
const createAuthUserService = async (user) => {
    await db_1.default.insert(schema_1.AuthOneUsersTable).values(user);
    return "User created successfully";
};
exports.createAuthUserService = createAuthUserService;
// log in user
const loginUserService = async (user) => {
    const { username, password } = user;
    return await db_1.default.query.AuthOneUsersTable.findFirst({
        columns: {
            username: true,
            role: true,
            password: true
        }, where: (0, drizzle_orm_1.sql) `${schema_1.AuthOneUsersTable.username} = ${username}`,
        with: {
            user: {
                columns: {
                    id: true,
                    name: true,
                    contact_phone: true,
                    email: true,
                }
            }
        }
    });
};
exports.loginUserService = loginUserService;
