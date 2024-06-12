import { Hono } from "hono";
import { createStateData, deleteStatesData, getAllStatesData, getOneStatesData, updateStatesData } from "./state.contreller";
import { zValidator } from "@hono/zod-validator";
import { stateSchema } from "../validators";
import { adminRoleAuth } from "../middleware/bearAuth";



export const StateRouter = new Hono();
StateRouter.get("/states", getAllStatesData);
StateRouter.get("/states/:id", getOneStatesData);
StateRouter.post("/states", createStateData);
StateRouter.delete("/states/:id", deleteStatesData);
StateRouter.put("/states/:id", updateStatesData);