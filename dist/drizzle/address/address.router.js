"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const hono_1 = require("hono");
const address_contreller_1 = require("./address.contreller");
exports.addressRouter = new hono_1.Hono();
exports.addressRouter.get("/address", address_contreller_1.getAllAddressData);
exports.addressRouter.get("/address/:id", address_contreller_1.fetchOneAddressData);
exports.addressRouter.post("/address", address_contreller_1.createAddressData);
exports.addressRouter.delete("/address/:id", address_contreller_1.deleteAddressData);
exports.addressRouter.put("/address/:id", address_contreller_1.updateAddressData);
