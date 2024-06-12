"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusRouter = void 0;
const hono_1 = require("hono");
const order_status_contreller_1 = require("./order_status.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.OrderStatusRouter = new hono_1.Hono();
exports.OrderStatusRouter.get("/OrderStatus", bearAuth_1.adminRoleAuth, order_status_contreller_1.getAllOrderStatusData);
exports.OrderStatusRouter.get("/OrderStatus/:id", bearAuth_1.userRoleAuth, order_status_contreller_1.getOneOrderStatusData);
exports.OrderStatusRouter.post("/OrderStatus", bearAuth_1.adminRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.orderStatusSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), order_status_contreller_1.createOrderstatusData);
exports.OrderStatusRouter.delete("/OrderStatus/:id", bearAuth_1.adminRoleAuth, order_status_contreller_1.deleteOrderStatusData);
exports.OrderStatusRouter.put("/OrderStatus/:id", bearAuth_1.adminRoleAuth, order_status_contreller_1.updateOrderStatusData);
