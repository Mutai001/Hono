"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const hono_1 = require("hono");
const user_contreller_1 = require("./user.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.UserRouter = new hono_1.Hono();
exports.UserRouter.get("/users", bearAuth_1.adminRoleAuth, user_contreller_1.getAllUsersData);
exports.UserRouter.get("/users/:id", bearAuth_1.userRoleAuth, user_contreller_1.getOneUsersData);
exports.UserRouter.post("/users", bearAuth_1.userRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), user_contreller_1.createUsersData);
exports.UserRouter.delete("/users/:id", bearAuth_1.userRoleAuth, user_contreller_1.deleteUsersData);
exports.UserRouter.put("/users/:id", bearAuth_1.userRoleAuth, user_contreller_1.updateUsersData);
