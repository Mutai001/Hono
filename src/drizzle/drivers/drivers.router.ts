import { Hono } from "hono";
import { createDriverData, deleteDriverData, getAllDriversData, getOneDriverData, updateDriverData } from "./drivers.contreller";

export const driverRouter = new Hono();
driverRouter.get("/driver", getAllDriversData);
driverRouter.get("/driver/:id", getOneDriverData);
driverRouter.post("/driver", createDriverData);
driverRouter.delete("/driver/:id", deleteDriverData);
driverRouter.put("/driver/:id", updateDriverData);