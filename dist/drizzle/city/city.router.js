"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityRouter = void 0;
const hono_1 = require("hono");
const city_contreller_1 = require("./city.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.CityRouter = new hono_1.Hono();
exports.CityRouter.get("/city", city_contreller_1.getAllCitysData);
exports.CityRouter.get("/city/:id", city_contreller_1.getOneCitysData);
exports.CityRouter.post("/city", bearAuth_1.adminRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.citySchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), city_contreller_1.createCitysData);
exports.CityRouter.delete("/city/:id", bearAuth_1.adminRoleAuth, city_contreller_1.deleteCitysData);
exports.CityRouter.put("/city/:id", bearAuth_1.adminRoleAuth, city_contreller_1.updateCitysData);
