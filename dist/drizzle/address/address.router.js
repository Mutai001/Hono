"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const hono_1 = require("hono");
const address_contreller_1 = require("./address.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.addressRouter = new hono_1.Hono();
exports.addressRouter.get("/address", bearAuth_1.adminRoleAuth, address_contreller_1.getAllAddressData);
exports.addressRouter.get("/address/:id", bearAuth_1.userRoleAuth, address_contreller_1.fetchOneAddressData);
exports.addressRouter.post("/address", bearAuth_1.adminRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.addressSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), address_contreller_1.createAddressData);
exports.addressRouter.delete("/address/:id", bearAuth_1.adminRoleAuth, address_contreller_1.deleteAddressData);
exports.addressRouter.put("/address/:id", bearAuth_1.adminRoleAuth, address_contreller_1.updateAddressData);
