import { Hono } from "hono";
import { createCitysData, deleteCitysData, getAllCitysData, getOneCitysData, updateCitysData} from "./city.contreller";
import { zValidator } from "@hono/zod-validator";
import { citySchema } from "../validators";
import { adminRoleAuth } from "../middleware/bearAuth";


export const CityRouter = new Hono();
CityRouter.get("/city", getAllCitysData);
CityRouter.get("/city/:id", getOneCitysData);
CityRouter.post("/city", adminRoleAuth,zValidator('json', citySchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createCitysData)
CityRouter.delete("/city/:id",adminRoleAuth, deleteCitysData);
CityRouter.put("/city/:id", adminRoleAuth, updateCitysData);