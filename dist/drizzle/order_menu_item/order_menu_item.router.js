"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMenuItemRouter = void 0;
const hono_1 = require("hono");
const order_menu_item_contreller_1 = require("./order_menu_item.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.OrderMenuItemRouter = new hono_1.Hono();
exports.OrderMenuItemRouter.get("/OrderMenuItem", bearAuth_1.adminRoleAuth, order_menu_item_contreller_1.getAllOrderMenuItemData);
exports.OrderMenuItemRouter.get("/OrderMenuItem/:id", bearAuth_1.adminRoleAuth, order_menu_item_contreller_1.getOneOrderMenuItemsData);
exports.OrderMenuItemRouter.post("/OrderMenuItem", bearAuth_1.userRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.orderMenuItemSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), order_menu_item_contreller_1.createOrderMenuItemData);
exports.OrderMenuItemRouter.delete("/OrderMenuItem/:id", bearAuth_1.userRoleAuth, order_menu_item_contreller_1.deleteOrderMenuItemData);
exports.OrderMenuItemRouter.put("/OrderMenuItem/:id", bearAuth_1.userRoleAuth, order_menu_item_contreller_1.updateOrderMenuItemData);
