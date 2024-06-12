"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateRouter = void 0;
const hono_1 = require("hono");
const state_contreller_1 = require("./state.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.StateRouter = new hono_1.Hono();
exports.StateRouter.get("/states", state_contreller_1.getAllStatesData);
exports.StateRouter.get("/states/:id", state_contreller_1.getOneStatesData);
exports.StateRouter.post("/states", bearAuth_1.adminRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.stateSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), state_contreller_1.createStateData);
exports.StateRouter.delete("/states/:id", bearAuth_1.adminRoleAuth, state_contreller_1.deleteStatesData);
exports.StateRouter.put("/states/:id", bearAuth_1.adminRoleAuth, state_contreller_1.updateStatesData);
