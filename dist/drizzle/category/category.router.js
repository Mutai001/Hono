"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const hono_1 = require("hono");
const category_contreller_1 = require("./category.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.categoryRouter = new hono_1.Hono();
exports.categoryRouter.get("/category", category_contreller_1.getAllCategoryData);
exports.categoryRouter.get("/category/:id", category_contreller_1.getOneCategoryData);
exports.categoryRouter.post("/category", bearAuth_1.adminRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.categorySchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), category_contreller_1.createCategoryData);
exports.categoryRouter.delete("/category/:id", bearAuth_1.adminRoleAuth, category_contreller_1.deleteCategoryData);
exports.categoryRouter.put("/category/:id", bearAuth_1.adminRoleAuth, category_contreller_1.updateCategoryData);
