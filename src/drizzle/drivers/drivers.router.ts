import { Hono } from "hono";
import { createDriverData, deleteDriverData, getAllDriversData, getOneDriverData, updateDriverData } from "./drivers.contreller";
import { zValidator } from "@hono/zod-validator";
import { driverSchema } from "../validators";
import { adminRoleAuth } from "../middleware/bearAuth";


export const driverRouter = new Hono();
driverRouter.get("/driver", getAllDriversData);
driverRouter.get("/driver/:id", getOneDriverData);
driverRouter.post("/driver", createDriverData)
driverRouter.delete("/driver/:id",adminRoleAuth, deleteDriverData);
driverRouter.put("/driver/:id",  updateDriverData);