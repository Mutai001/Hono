"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const hono_1 = require("hono");
const user_contreller_1 = require("./user.contreller");
const bearAuth_1 = require("../middleware/bearAuth");
exports.UserRouter = new hono_1.Hono();
exports.UserRouter.get("/users", user_contreller_1.getAllUsersData);
exports.UserRouter.get("/users/:id", user_contreller_1.getOneUsersData);
exports.UserRouter.post("/users", user_contreller_1.createUsersData);
exports.UserRouter.delete("/users/:id", bearAuth_1.userOrAdminRoleAuth, user_contreller_1.deleteUsersData);
exports.UserRouter.put("/users/:id", bearAuth_1.userOrAdminRoleAuth, user_contreller_1.updateUsersData);
// export const UserRouter = new Hono();
// UserRouter.get("/users",adminRoleAuth, getAllUsersData);
// UserRouter.get("/users/:id", userRoleAuth, getOneUsersData);
// UserRouter.post("/users", zValidator('json', userSchema, (result, c) => {
//     if (!result.success) {
//         return c.json(result.error, 400)
//     }
// }),createUsersData);
// UserRouter.delete("/users/:id", deleteUsersData);
// UserRouter.put("/users/:id", updateUsersData);
