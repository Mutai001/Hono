import { Hono } from "hono";
import { createDriverData, deleteDriverData, getAllDriversData, getOneDriverData, updateDriverData } from "./drivers.contreller";
import { zValidator } from "@hono/zod-validator";
import { driverSchema } from "../validators";
import { adminRoleAuth } from "../middleware/bearAuth";


export const driverRouter = new Hono();
driverRouter.get("/driver",adminRoleAuth, getAllDriversData);
driverRouter.get("/driver/:id",adminRoleAuth, getOneDriverData);
driverRouter.post("/driver", adminRoleAuth,zValidator('json', driverSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createDriverData)
driverRouter.delete("/driver/:id",adminRoleAuth, deleteDriverData);
driverRouter.put("/driver/:id", adminRoleAuth, updateDriverData);