"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRouter = void 0;
const hono_1 = require("hono");
const orders_contreller_1 = require("./orders.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.ordersRouter = new hono_1.Hono();
exports.ordersRouter.get("/orders", bearAuth_1.adminRoleAuth, orders_contreller_1.getAllOrdersData);
exports.ordersRouter.get("/orders/:id", bearAuth_1.adminRoleAuth, orders_contreller_1.getOneOrdersData);
exports.ordersRouter.post("/orders", bearAuth_1.userRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.orderSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), orders_contreller_1.createOrdersData);
exports.ordersRouter.delete("/orders/:id", bearAuth_1.userRoleAuth, orders_contreller_1.deleteOrdersData);
exports.ordersRouter.put("/orders/:id", bearAuth_1.userRoleAuth, orders_contreller_1.updateOrdersData);
