"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status_catalogRouter = void 0;
const hono_1 = require("hono");
const status_catalog_contreller_1 = require("./status_catalog.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.status_catalogRouter = new hono_1.Hono();
exports.status_catalogRouter.get("/status_catalog", bearAuth_1.adminRoleAuth, status_catalog_contreller_1.getAllstatusCatalogsData);
exports.status_catalogRouter.get("/status_catalog/:id", status_catalog_contreller_1.getOnestatusCatalogData);
exports.status_catalogRouter.post("/status_catalog", bearAuth_1.adminRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.statusCatalogSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), status_catalog_contreller_1.createstatusCatalogData);
exports.status_catalogRouter.delete("/status_catalog/:id", bearAuth_1.adminRoleAuth, status_catalog_contreller_1.deletestatusCatalogData);
exports.status_catalogRouter.put("/status_catalog/:id", bearAuth_1.adminRoleAuth, status_catalog_contreller_1.updatestatusCatalogData);
