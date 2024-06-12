"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItemRouter = void 0;
const hono_1 = require("hono");
const menu_item_contreller_1 = require("./menu_item.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.menuItemRouter = new hono_1.Hono();
exports.menuItemRouter.get("/MenuItem", menu_item_contreller_1.getAllMenuItemData);
exports.menuItemRouter.get("/MenuItem/:id", menu_item_contreller_1.getOneMenuItemData);
exports.menuItemRouter.post("/MenuItem", bearAuth_1.adminRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.menuItemSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), menu_item_contreller_1.createMenuItemData);
exports.menuItemRouter.delete("/MenuItem/:id", bearAuth_1.adminRoleAuth, menu_item_contreller_1.deleteMenuItemData);
exports.menuItemRouter.put("/MenuItem/:id", bearAuth_1.adminRoleAuth, menu_item_contreller_1.updateMenuItemData);
