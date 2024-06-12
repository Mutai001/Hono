"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverRouter = void 0;
const hono_1 = require("hono");
const drivers_contreller_1 = require("./drivers.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.driverRouter = new hono_1.Hono();
exports.driverRouter.get("/driver", bearAuth_1.adminRoleAuth, drivers_contreller_1.getAllDriversData);
exports.driverRouter.get("/driver/:id", bearAuth_1.adminRoleAuth, drivers_contreller_1.getOneDriverData);
exports.driverRouter.post("/driver", bearAuth_1.adminRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.driverSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), drivers_contreller_1.createDriverData);
exports.driverRouter.delete("/driver/:id", bearAuth_1.adminRoleAuth, drivers_contreller_1.deleteDriverData);
exports.driverRouter.put("/driver/:id", bearAuth_1.adminRoleAuth, drivers_contreller_1.updateDriverData);
